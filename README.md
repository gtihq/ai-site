# ai.gti.dev

Site da fundação de pesquisa em IA da GTI: skills para agentes, servidores MCP e o método de treino com dados que podem ser usados, incluindo conteúdo próprio.

## Stack

Astro 7 com saída estática, Tailwind CSS 4 e um servidor Node opcional para servir os mesmos arquivos estáticos.

## Comandos

```bash
npm install
npm run dev      # astro dev, escuta em 0.0.0.0:4321
npm run build    # gera dist/
npm run preview  # astro preview, escuta em 0.0.0.0:4321
npm run check    # checagem de tipos do Astro
```

O modo dev já escuta em todas as interfaces, então também responde no IP do Tailscale (`100.96.101.113:4321` nesta máquina).

## Servir com Node

O build é estático e pode ser servido diretamente pela Cloudflare. Quando precisar de um processo Node na frente, por exemplo para publicar atualizações do `gti`, use:

```bash
npm run build
npm run serve    # POR padrão em 0.0.0.0:3000, configure PORT e HOST se quiser
```

O servidor em `server.mjs` faz três coisas:

1. Serve os arquivos de `dist/` com MIME types corretos e fallback para `index.html`.
2. Serve os arquivos de `public/updates/` em `/updates/`, com cache curto.
3. Bloqueia travessia de diretório e não lista diretórios.

Para publicar uma atualização, adicione um arquivo em `public/updates/` e uma entrada em `public/updates/index.json`. O mesmo JSON alimenta a seção de atualizações do site no build e fica disponível em `/updates/index.json`.

## Cloudflare Pages

```bash
npx wrangler login
npm run deploy
```

O `wrangler.toml` já aponta `dist/` como diretório de build. Depois do primeiro deploy, associe o domínio `ai.gti.dev` ao projeto e configure o DNS da zona na Cloudflare:

```bash
npx wrangler pages domain add ai.gti.dev --project-name ai-site
```

## Direção visual

Papel quente (`#f7f5f0`), tinta (`#1c1d19`) e um único acento (`#a5502f`). Display em Instrument Serif, texto em DM Sans, rótulos e dados em JetBrains Mono. Sem gradientes, glow, ícones emoji, badges coloridos ou cartões de feature em grade de seis. Os “produtos” mostrados na página são artefatos reais: manifesto de procedência, lista de skills e lista de servidores MCP.

Os tokens vivem em `src/styles/global.css` dentro de `@theme`. Não use cores avulsas nos componentes.
