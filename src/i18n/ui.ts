export const languages = ['pt', 'en'] as const;

export type Language = (typeof languages)[number];

const pt = {
  meta: {
    title: 'GTI AI, pesquisa em modelos justos',
    description: 'Fundação de pesquisa em IA da GTI. Skills, MCP, modelos de pesos abertos e treinamento com dados rastreáveis, incluindo conteúdo próprio.',
  },
  nav: {
    skills: 'Skills',
    mcp: 'MCP',
    models: 'Modelos',
    method: 'Método',
    updates: 'Atualizações',
    github: 'GitHub',
    skip: 'Ir para o conteúdo',
    language: 'Idioma',
  },
  hero: {
    eyebrow: 'pesquisa independente em IA / GTI',
    title: 'Modelos justos. Dados com origem.',
    subtitle: 'Pesquisa em treinamento e inferência. Uso apenas conteúdo com permissão para treino, incluindo o meu. Refino modelos existentes e publico os pesos e o que aprendo.',
    cta: 'Explorar projetos',
    secondary: 'Ver método',
  },
  manifest: {
    title: 'proveniência',
    version: 'v1',
    columns: ['fonte', 'permissão', 'uso'],
    rows: [
      { source: 'própria', permission: 'sim', use: 'treino' },
      { source: 'licenciada', permission: 'sim', use: 'treino' },
      { source: 'pública', permission: 'verificada', use: 'treino' },
      { source: 'raspada', permission: 'não', use: 'fora' },
    ],
    footnote: 'todo exemplo rastreado até a fonte',
    caption: 'A origem vem antes do resultado.',
  },
  pillars: {
    label: 'quatro frentes, uma pesquisa',
    items: [
      {
        index: '01',
        title: 'Skills',
        text: 'Instruções que agentes descobrem por convenção, sem registro central.',
        artifact: 'skills/<nome>/SKILL.md',
      },
      {
        index: '02',
        title: 'MCP',
        text: 'Conexões com ferramentas reais, cada uma com permissões explícitas.',
        artifact: 'mcp/<nome>/index.ts',
      },
      {
        index: '03',
        title: 'Modelos',
        text: 'Pesos abertos no Hugging Face, treinados com dados rastreáveis.',
        artifact: 'gtihq/<modelo>',
      },
      {
        index: '04',
        title: 'Pesquisa',
        text: 'Treinamento com procedência, refino de modelos e estudo da inferência.',
        artifact: 'research/<experimento>.md',
      },
    ],
  },
  skills: {
    eyebrow: '01 / skills',
    title: 'Instruções no repositório.',
    intro: 'Cada skill é um diretório com instruções, exemplos e limites. O agente encontra pela estrutura.',
    columns: ['skill', 'área', 'função'],
    items: [
      { name: 'security-audit', area: 'código', note: 'revisão defensiva de repositórios' },
      { name: 'llm-fine-tuning', area: 'modelos', note: 'treino supervisionado com LoRA' },
      { name: 'weight-space-programming', area: 'modelos', note: 'edição direta de pesos' },
      { name: 'unslop-interface', area: 'interface', note: 'polimento de telas geradas por IA' },
      { name: 'infra-expert', area: 'infra', note: 'revisão e mudanças de infraestrutura' },
      { name: 'web-performance-audit', area: 'web', note: 'Core Web Vitals e carregamento' },
    ],
    more: 'Ver todas no GitHub',
  },
  mcp: {
    eyebrow: '02 / MCP',
    title: 'Ferramentas reais.',
    intro: 'Cada MCP expõe só o necessário, com permissões explícitas.',
    command: '$ GTI MCP list',
    items: [
      { name: 'kabum', note: 'produtos e consulta de CEP' },
      { name: 'mercadolivre', note: 'pedidos e opções de frete' },
      { name: 'shopee', note: 'categorias e tendências' },
      { name: 'twitter', note: 'tendências e busca' },
      { name: 'zoom', note: 'comparação de preços' },
    ],
    footnote: 'a lista completa fica no repositório',
    more: 'Ver MCPs',
  },
  models: {
    eyebrow: '03 / modelos',
    title: 'Modelos abertos, treinados com origem.',
    intro: 'Dois modelos no Hugging Face, todos com pesos abertos sob licença MIT. Feitos para rodar no dispositivo, sem rede.',
    items: [
      {
        name: 'omniglide',
        task: 'geração de texto',
        note: 'digitação por gesto em teclado Android, em português e inglês, com dados de HeliBoard e FUTO. Cerca de 2 MB.',
      },
      {
        name: 'omnivox-lite',
        task: 'reconhecimento de fala',
        note: 'Whisper base local com dicionários pt-BR e correção offline. Cerca de 141 MB.',
      },
    ],
    note: 'Todos os modelos publicados pela GTI têm pesos abertos. Sem exceção.',
    more: 'Ver no Hugging Face',
  },
  method: {
    eyebrow: '04 / pesquisa',
    title: 'Como eu treino.',
    intro: 'Quatro decisões que guiam o trabalho, do primeiro exemplo à resposta final.',
    items: [
      { index: '01', title: 'Origem conhecida', text: 'Todo exemplo de treino tem fonte e permissão registradas.' },
      { index: '02', title: 'Conteúdo próprio, com cuidado', text: 'Meus textos entram com consentimento explícito e ficam separados do resto.' },
      { index: '03', title: 'Refino antes de começar de novo', text: 'Quando um modelo existente resolve, eu o ajusto em vez de treinar do zero.' },
      { index: '04', title: 'Inferência também é pesquisa', text: 'Estudo como o modelo responde, não só como ele foi treinado.' },
    ],
    note: 'Não uso conteúdo obtido sem permissão para treino. Isso inclui material raspado da web e dados pessoais de outras pessoas.',
  },
  updates: {
    eyebrow: 'atualizações',
    title: 'O GTI também publica aqui.',
    intro: 'As próximas versões do GTI serão servidas como arquivos estáticos neste domínio.',
    read: 'Ler a nota',
  },
  footer: {
    tagline: 'Pesquisa independente em IA, feita por uma pessoa.',
    github: 'GitHub',
    updates: 'Atualizações',
    copyright: '© 2026 GTI',
  },
};

const en: typeof pt = {
  meta: {
    title: 'GTI AI, research on fair models',
    description: 'GTI AI research foundation. Skills, MCP, open-weight models and training on data that can actually be used, including my own content.',
  },
  nav: {
    skills: 'Skills',
    mcp: 'MCP',
    models: 'Models',
    method: 'Method',
    updates: 'Updates',
    github: 'GitHub',
    skip: 'Skip to content',
    language: 'Language',
  },
  hero: {
    eyebrow: 'independent AI research / GTI',
    title: 'Fair models. Data with a source.',
    subtitle: 'Research in training and inference. I train only on content that can legitimately be used, including my own. I refine existing models and publish the weights and what I learn.',
    cta: 'Explore the work',
    secondary: 'Read the method',
  },
  manifest: {
    title: 'provenance',
    version: 'v1',
    columns: ['source', 'permission', 'use'],
    rows: [
      { source: 'own', permission: 'yes', use: 'train' },
      { source: 'licensed', permission: 'yes', use: 'train' },
      { source: 'public', permission: 'verified', use: 'train' },
      { source: 'scraped', permission: 'no', use: 'out' },
    ],
    footnote: 'every example traced back to its source',
    caption: 'Provenance comes before the result.',
  },
  pillars: {
    label: 'four fronts, one research practice',
    items: [
      {
        index: '01',
        title: 'Skills',
        text: 'Instructions agents discover by convention, with no central registry.',
        artifact: 'skills/<name>/SKILL.md',
      },
      {
        index: '02',
        title: 'MCP',
        text: 'Connections to real tools, each with explicit permissions.',
        artifact: 'mcp/<name>/index.ts',
      },
      {
        index: '03',
        title: 'Models',
        text: 'Open weights on Hugging Face, trained on traceable data.',
        artifact: 'gtihq/<model>',
      },
      {
        index: '04',
        title: 'Research',
        text: 'Training with provenance, model refinement and inference work.',
        artifact: 'research/<experiment>.md',
      },
    ],
  },
  skills: {
    eyebrow: '01 / skills',
    title: 'Instructions in the repo.',
    intro: 'Each skill is a directory with instructions, examples and limits. The agent finds it through the structure.',
    columns: ['skill', 'area', 'what it does'],
    items: [
      { name: 'security-audit', area: 'code', note: 'defensive review of repositories' },
      { name: 'llm-fine-tuning', area: 'models', note: 'supervised training with LoRA' },
      { name: 'weight-space-programming', area: 'models', note: 'direct editing of model weights' },
      { name: 'unslop-interface', area: 'interface', note: 'polishing AI-generated interfaces' },
      { name: 'infra-expert', area: 'infra', note: 'infrastructure review and changes' },
      { name: 'web-performance-audit', area: 'web', note: 'Core Web Vitals and loading' },
    ],
    more: 'See all on GitHub',
  },
  mcp: {
    eyebrow: '02 / MCP',
    title: 'Real tools.',
    intro: 'Every MCP exposes only what is needed, with explicit permissions.',
    command: '$ GTI MCP list',
    items: [
      { name: 'kabum', note: 'products and postal code lookup' },
      { name: 'mercadolivre', note: 'orders and shipping options' },
      { name: 'shopee', note: 'categories and trending searches' },
      { name: 'twitter', note: 'trends and search' },
      { name: 'zoom', note: 'price comparison' },
    ],
    footnote: 'the full list lives in the repository',
    more: 'See MCPs',
  },
  models: {
    eyebrow: '03 / models',
    title: 'Open weights, trained with provenance.',
    intro: 'Two models on Hugging Face, all open weight under MIT. Built to run on device, with no network calls.',
    items: [
      {
        name: 'omniglide',
        task: 'text generation',
        note: 'gesture typing for an Android keyboard in Portuguese and English, trained on HeliBoard and FUTO traces. About 2 MB.',
      },
      {
        name: 'omnivox-lite',
        task: 'speech recognition',
        note: 'local Whisper base with pt-BR dictionaries and offline correction. About 141 MB.',
      },
    ],
    note: 'Every model published by GTI has open weights. No exceptions.',
    more: 'See on Hugging Face',
  },
  method: {
    eyebrow: '04 / research',
    title: 'How I train.',
    intro: 'Four decisions that guide the work, from the first example to the final answer.',
    items: [
      { index: '01', title: 'Known origin', text: 'Every training example has a recorded source and permission.' },
      { index: '02', title: 'Own content, handled carefully', text: 'My own writing is included with explicit consent and kept separate.' },
      { index: '03', title: 'Refine before starting over', text: 'When an existing model works, I adjust it instead of training from scratch.' },
      { index: '04', title: 'Inference is research too', text: 'I study how the model answers, not only how it was trained.' },
    ],
    note: 'I do not use content obtained without permission for training. That includes scraped web material and other people’s personal data.',
  },
  updates: {
    eyebrow: 'updates',
    title: 'GTI publishes here too.',
    intro: 'Future GTI releases will be served as static files on this domain.',
    read: 'Read the note',
  },
  footer: {
    tagline: 'Independent AI research, done by one person.',
    github: 'GitHub',
    updates: 'Updates',
    copyright: '© 2026 GTI',
  },
};

export const ui: Record<Language, typeof pt> = { pt, en };

export function translations(language: Language): typeof pt {
  return ui[language];
}

export function localePath(language: Language, path = ''): string {
  if (language === 'pt') {
    return `/${path}`.replace(/\/$/, '') || '/';
  }
  return `/en/${path}`;
}
