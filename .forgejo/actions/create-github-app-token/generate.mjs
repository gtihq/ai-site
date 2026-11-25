import crypto from "node:crypto";

const appId = process.env.APP_ID;
const privateKey = (process.env.PRIVATE_KEY ?? "").replace(/\\n/g, "\n");
const owner = process.env.OWNER;
const repositories = (process.env.REPOSITORIES ?? "")
    .split(/[\s,]+/)
    .filter(Boolean);
const permission = process.env.PERMISSION_CONTENTS || "read";
const apiUrl = (process.env.GITHUB_API_URL || "https://api.github.com").replace(/\/$/, "");

if (!appId || !privateKey || !owner) {
    console.error("APP_ID, PRIVATE_KEY e OWNER sao obrigatorios.");
    process.exit(1);
}

const base64url = (value) => Buffer.from(value).toString("base64url");

const now = Math.floor(Date.now() / 1000);
const header = {
    alg: "RS256",
    typ: "JWT",
};
const payload = {
    iat: now - 60,
    exp: now + 540,
    iss: appId,
};
const signingInput = `${base64url(JSON.stringify(header))}.${base64url(JSON.stringify(payload))}`;
const signature = crypto
    .createSign("RSA-SHA256")
    .update(signingInput)
    .sign(privateKey)
    .toString("base64url");
const jwt = `${signingInput}.${signature}`;

const headers = {
    Authorization: `Bearer ${jwt}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "Content-Type": "application/json",
};

const request = async (url, options) => {
    const response = await fetch(url, options);
    const text = await response.text();
    if (!response.ok) {
        console.error(`GitHub API retornou ${response.status} para ${url.replace(/\/[0-9]+\//, "/<id>/")}`);
        process.exit(1);
    }
    return text ? JSON.parse(text) : {};
};

const installations = await request(`${apiUrl}/app/installations`, {
    method: "GET",
    headers,
});

const targetLogin = owner.toLowerCase();
const installation = installations.find((item) => item?.account?.login?.toLowerCase() === targetLogin);

if (!installation) {
    const available = installations.map((item) => item?.account?.login).filter(Boolean).join(", ");
    console.error(`App nao instalado na conta ${owner}. Contas disponiveis: ${available || "nenhuma"}.`);
    process.exit(1);
}

const body = {
    permissions: {
        contents: permission,
    },
};
if (repositories.length > 0) {
    body.repositories = repositories;
}

const tokenResponse = await request(`${apiUrl}/app/installations/${installation.id}/access_tokens`, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
});

if (!tokenResponse.token) {
    console.error("GitHub nao devolveu token de instalacao.");
    process.exit(1);
}

process.stdout.write(tokenResponse.token);
