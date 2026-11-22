# ai.gti.dev

Site da fundação de pesquisa em IA da GTI. Skills para agentes, MCP e o método de treino com dados rastreáveis, incluindo conteúdo próprio.

## Stack

Astro 7 com saída estática, Tailwind CSS 4 e um servidor Node que serve os mesmos arquivos estáticos. Sem Cloudflare Pages e sem wrangler: o deploy segue o GitOps da infra, com GitHub como fonte da verdade, Forgejo Actions, Docker Swarm e Traefik. A Cloudflare cuida apenas do DNS e do certificado.

## Idiomas

Português em `/` e inglês em `/en/`. Os textos vivem em `src/i18n/ui.ts`, e as notas de atualização em `public/updates/index.json` têm os dois idiomas. Ao adicionar uma string, coloque-a nos dois dicionários; o tipo do dicionário em inglês é o do português, então o compilador avisa se faltar alguma chave.

## Comandos

```bash
npm install
npm run dev      # astro dev em 0.0.0.0:4321
npm run build    # gera dist/ com as duas linguas
npm run check    # checagem de tipos
npm run serve    # Node servindo dist/ em 0.0.0.0:3000
```

O modo dev escuta em todas as interfaces, então também responde no IP do Tailscale (`100.96.101.113:4321` nesta máquina).

## Servir arquivos estáticos com Node

`server.mjs` serve `dist/`, serve `public/updates/` em `/updates/`, bloqueia travessia de diretório e não lista diretórios. É por aqui que as futuras versões do `GTI` podem ser publicadas como arquivos estáticos. Para adicionar uma atualização, crie o arquivo em `public/updates/` e uma entrada em `public/updates/index.json`.

## Deploy

O fluxo é o mesmo dos outros apps da infra:

```
push em gtihq/ai-site (master)
  -> webhook-hub (https://webhooks.gti.dev/webhooks/github)
  -> Forgejo Actions em gtihq/ai-site
  -> docker build + docker service update --force ai-site
  -> Traefik serve ai.gti.dev
```

O workflow está em `.forgejo/workflows/deploy.yml` e o `Dockerfile` gera uma imagem que roda `node server.mjs` na porta 80.

Para colocar no ar, a infra precisa de:

1. Pull mirror `gtihq/ai-site` no Forgejo, apontando para o GitHub.
2. Entrada `gtihq/ai-site` no mapa `FORGEJO_DISPATCH` de `terraform/stacks/services/webhook_hub/server.py`.
3. Webhook no GitHub apontando para `https://webhooks.gti.dev/webhooks/github`.
4. Serviço Swarm `ai-site` e rota Traefik para `ai.gti.dev`.
5. CNAME `ai.gti.dev` apontando para `server.gti.dev` na Cloudflare, com SSL em Full (strict).

## Direção visual

Base escura (`#0a0b0d`), superfície (`#121417`), texto (`#f4f5f7`) e um único acento (`#ff6b35`). Space Grotesk para títulos e texto, IBM Plex Mono para rótulos e dados. Sem serif, gradiente, glow, emoji ou cartões de feature em grade de seis. A marca GTI é sempre maiúscula. Os artefatos mostrados são reais: manifesto de procedência, skills do repo `ai-skills` e MCPs do repo `ai-mcps`.

Os tokens vivem em `src/styles/global.css` dentro de `@theme`. Não use cores avulsas nos componentes.
