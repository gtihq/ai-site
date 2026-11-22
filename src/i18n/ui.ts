export const languages = ['pt', 'en'] as const;

export type Language = (typeof languages)[number];

const pt = {
  meta: {
    title: 'GTI AI, pesquisa em modelos justos',
    description: 'GTI AI. Skills, MCP, modelos de pesos abertos e pesquisa em treinamento justo. Tudo em um só lugar.',
  },
  nav: {
    included: 'Incluído',
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
    cta: 'Ver o que está incluso',
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
  included: {
    eyebrow: 'incluído',
    title: 'Tudo que o agente precisa.',
    intro: 'Skills, conexões MCP e modelos de pesos abertos. Um conjunto pronto para usar, sem registro manual.',
    items: [
      { index: '01', title: 'Skills', text: 'Instruções prontas, descobertas pela estrutura do repositório.' },
      { index: '02', title: 'MCP', text: 'Conexões com ferramentas reais e permissões explícitas.' },
      { index: '03', title: 'Modelos', text: 'Pesos abertos no Hugging Face, treinados com dados rastreáveis.' },
      { index: '04', title: 'Pesquisa', text: 'Refino de modelos e estudo da inferência.' },
    ],
  },
  models: {
    eyebrow: 'modelos',
    title: 'Pesos abertos, sempre.',
    intro: 'Dois modelos no Hugging Face, todos sob licença MIT. Feitos para rodar no dispositivo, sem rede.',
    items: [
      {
        name: 'omniglide',
        href: 'https://huggingface.co/gtihq/omniglide',
        task: 'geração de texto',
        note: 'digitação por gesto em teclado Android, em português e inglês, com dados de HeliBoard e FUTO. Cerca de 2 MB.',
      },
      {
        name: 'omnivox-lite',
        href: 'https://huggingface.co/gtihq/omnivox-lite',
        task: 'reconhecimento de fala',
        note: 'Whisper base local com dicionários pt-BR e correção offline. Cerca de 141 MB.',
      },
    ],
    note: 'Todos os modelos publicados pela GTI têm pesos abertos. Sem exceção.',
    more: 'Ver no Hugging Face',
  },
  method: {
    eyebrow: 'pesquisa',
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
  cta: {
    title: 'Os pesos estão abertos.',
    text: 'Baixe, teste e refine. Os modelos estão no Hugging Face sob licença MIT.',
    button: 'Ver modelos',
  },
  updates: {
    eyebrow: 'atualizações',
    title: 'O GTI também publica aqui.',
    intro: 'As próximas versões do GTI serão servidas como arquivos estáticos neste domínio.',
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
    description: 'GTI AI. Skills, MCP, open-weight models and research on fair training. All in one place.',
  },
  nav: {
    included: 'Included',
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
    cta: 'See what is included',
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
  included: {
    eyebrow: 'included',
    title: 'Everything the agent needs.',
    intro: 'Skills, MCP connections and open-weight models. A ready-to-use set with no manual registration.',
    items: [
      { index: '01', title: 'Skills', text: 'Ready instructions, discovered through the repository structure.' },
      { index: '02', title: 'MCP', text: 'Connections to real tools with explicit permissions.' },
      { index: '03', title: 'Models', text: 'Open weights on Hugging Face, trained on traceable data.' },
      { index: '04', title: 'Research', text: 'Model refinement and inference work.' },
    ],
  },
  models: {
    eyebrow: 'models',
    title: 'Open weights, always.',
    intro: 'Two models on Hugging Face, all under MIT. Built to run on device, with no network calls.',
    items: [
      {
        name: 'omniglide',
        href: 'https://huggingface.co/gtihq/omniglide',
        task: 'text generation',
        note: 'gesture typing for an Android keyboard in Portuguese and English, trained on HeliBoard and FUTO traces. About 2 MB.',
      },
      {
        name: 'omnivox-lite',
        href: 'https://huggingface.co/gtihq/omnivox-lite',
        task: 'speech recognition',
        note: 'local Whisper base with pt-BR dictionaries and offline correction. About 141 MB.',
      },
    ],
    note: 'Every model published by GTI has open weights. No exceptions.',
    more: 'See on Hugging Face',
  },
  method: {
    eyebrow: 'research',
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
  cta: {
    title: 'The weights are open.',
    text: 'Download, test and refine. The models are on Hugging Face under MIT.',
    button: 'See the models',
  },
  updates: {
    eyebrow: 'updates',
    title: 'GTI publishes here too.',
    intro: 'Future GTI releases will be served as static files on this domain.',
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
