/**
 * Configuração central do site da Teacher Bia Vieira.
 * Mapeada a partir do site original (drive arquivado + screenshots
 * em /Users/Leonardo/Downloads/Conferencia - Teacher Bia Vieira).
 */

export const links = {
  // Único canal de conversão e suporte: WhatsApp
  whatsapp: "https://wa.me/message/I4GPS6CCNQSBO1",

  // Aliases mantidos para retrocompatibilidade dos componentes
  get whatsappVendas() { return this.whatsapp; },
  get whatsappSuporte() { return this.whatsapp; },

  // Vídeo de apresentação (YouTube embed)
  youtubeId: "ecBtLiwkvfo",

  // Plataforma do aluno (Flexge oficial; trocar se houver login customizado)
  flexgeLogin: "https://app.flexge.com/",
} as const;

export const pricing = {
  plano: {
    title: "Plano Mensal — Condição Especial",
    subtitle: "Tudo o que você precisa para falar inglês com confiança",
    priceFrom: "R$ 599,90",
    price: "R$ 249,90",
    period: "/ mês",
    href: links.whatsapp,
    cta: "Quero Garantir Minha Vaga",
    badge: "Matrículas abertas",
    features: [
      "1 aula em grupo por semana com foco em conversação",
      "Plano de estudos 100% personalizado",
      "Plantão de dúvidas sempre que travar",
      "Comunidade de alunos para praticar junto",
      "Acesso à plataforma exclusiva Flexge 24/7",
    ],
  },
};

export const testimonials = [
  {
    name: "Luara Carvalho",
    role: "Aluna · Pessoal + Profissional",
    text: "A experiência com a professora Beatriz e a plataforma Bia Vieira Academy tem sido surpreendente. As aulas particulares são envolventes e eficazes, e a plataforma complementa perfeitamente o aprendizado. Estou satisfeita com os resultados, tanto no âmbito pessoal quanto profissional, pois aprender inglês é essencial para minha carreira. Recomendo fortemente o curso e a professora Beatriz.",
  },
  {
    name: "Juliana Morgenstern",
    role: "Terapeuta integrativa",
    text: "A plataforma de inglês Flexge da Teacher Bia Vieira foi pontual no que estava procurando. Buscava o inglês para ter acesso a estudos e pesquisas mais aprofundados sobre os temas da minha atuação. Além dos exercícios práticos e imersivos, o feedback da teacher me trouxe clareza e ajuste no formato de estudo, onde estava me impedindo de vivenciar a língua e a fluência.",
  },
  {
    name: "Fabio",
    role: "Aluno · Pai de dois estudantes",
    text: "A plataforma de inglês da professora Bia foi muito boa para meus filhos. Tem desenvolvido o inglês, principalmente do meu filho de 10 anos. Para minha menina de 6 anos é mais lúdico, e eu escuto ela cantando as músicas em inglês e já tem se experimentado algumas frases do dia a dia.",
  },
  {
    name: "Aluna Iniciante",
    role: "Plataforma Teacher Bia Vieira",
    text: "Sou aluna da Plataforma Teacher Bia Vieira e minha experiência tem sido fantástica. Além do excelente suporte oferecido pela plataforma e pela equipe, a ferramenta de ensino em inglês trabalha de maneira dinâmica todas as habilidades: escuta, escrita e pronúncia. Até o momento, não encontrei nada igual no mercado.",
  },
  {
    name: "Aluna Mobile",
    role: "Estuda pelo celular",
    text: "A Plataforma Teacher Bia Vieira tem me ajudado bastante no aprendizado do inglês. Consigo fazer os exercícios através do meu celular, conforme a minha disponibilidade, de forma prática e interativa. Gosto muito de ouvir minha gravação para exercícios de speaking, assim consigo avaliar a minha pronúncia.",
  },
];

export const journey = [
  {
    n: "01",
    title: "Teste de Nivelamento",
    text: "Começa com um teste preciso que identifica seu nível real de inglês hoje.",
  },
  {
    n: "02",
    title: "Plano de Estudo Personalizado",
    text: "Com base nos resultados, você recebe um plano de estudo adaptado ao seu nível e seu ritmo.",
  },
  {
    n: "03",
    title: "Acesso à Plataforma",
    text: "Plataforma Flexge no computador ou celular, 24h por dia, com mais de 31.000 exercícios.",
  },
  {
    n: "04",
    title: "Feedback da Teacher Bia",
    text: "Feedbacks personalizados enviados diretamente pela Bia dentro da plataforma.",
  },
  {
    n: "05",
    title: "Plantão de Dúvidas",
    text: "Sempre que travar, conta com plantão pra esclarecer qualquer ponto na hora.",
  },
  {
    n: "06",
    title: "1 Aula Semanal em Grupo",
    text: "Participe do grupo semanal com foco em prática real de conversação, ganhando fluência de verdade.",
  },
];

export const audiences = [
  {
    title: "Crianças",
    text: "Aulas gamificadas e interativas focadas no desenvolvimento das habilidades de fala e escuta.",
    icon: "🧒",
  },
  {
    title: "Pré-Adolescentes",
    text: "Conteúdos dinâmicos que estimulam a curiosidade e a criatividade, mantendo o interesse no aprendizado.",
    icon: "📚",
  },
  {
    title: "Adolescentes",
    text: "Suporte para estudos escolares e futuros desafios, preparando-os para exames e oportunidades acadêmicas.",
    icon: "🎓",
  },
  {
    title: "Adultos",
    text: "Metodologia personalizada para melhorar habilidades linguísticas no ambiente profissional e pessoal.",
    icon: "💼",
  },
  {
    title: "Idosos",
    text: "Aulas acessíveis e amigáveis para enriquecer a vida, seja para viagens ou comunicação com familiares.",
    icon: "🌍",
  },
];

export const diferenciais = [
  { title: "Aulas personalizadas", text: "Conteúdo adaptado ao seu nível, ritmo e objetivo, do início ao fim." },
  { title: "Feedback de pronúncia", text: "Tecnologia avançada que analisa sua fala e devolve correção em tempo real." },
  { title: "Conteúdo gamificado", text: "Aprender vira jogo, mantendo a motivação alta dia após dia." },
  { title: "Ajuste pelo progresso", text: "Os estudos se adaptam conforme você evolui, sem ficar parado." },
  { title: "Imersão com nativos", text: "Conversas e exercícios com nativos pra você ouvir o inglês real." },
  { title: "Relatórios detalhados", text: "Acompanhe seu desenvolvimento com dados de progresso e análises." },
  { title: "Comunidade ativa", text: "Conecte-se com outros alunos pra trocar experiências e tirar dúvidas." },
  { title: "Desafios semanais", text: "Competições e desafios que aceleram suas habilidades a cada semana." },
];

export const faq = [
  {
    q: "Como faço para me inscrever na Teacher Bia Vieira Academy?",
    a: "Você clica em qualquer botão do site, conversa com a equipe pelo WhatsApp pra escolher a melhor data de início, faz o teste de nivelamento e em seguida recebe seu plano de estudos personalizado.",
  },
  {
    q: "Quanto tempo leva para ver resultados no aprendizado?",
    a: "Os resultados variam conforme o esforço e a dedicação do aluno, mas a maioria começa a sentir progresso significativo em poucas semanas de estudo consistente.",
  },
  {
    q: "A plataforma é adequada para iniciantes?",
    a: "Sim. A metodologia foi desenhada pra atender desde o nível iniciante absoluto até o avançado, com trilha personalizada pra cada ponto de partida.",
  },
  {
    q: "As aulas são ao vivo ou gravadas?",
    a: "Oferecemos uma combinação de aulas ao vivo e gravadas para atender suas necessidades e disponibilidade. Você tem o melhor dos dois mundos.",
  },
  {
    q: "Posso estudar pelo celular?",
    a: "Sim. A plataforma Flexge funciona no navegador e no aplicativo móvel, com acesso 24h por dia, em qualquer lugar.",
  },
  {
    q: "Tenho acesso a aulas com a Teacher Bia?",
    a: "Sim. Você recebe feedbacks personalizados da Bia dentro da plataforma e participa de aulas em grupo focadas em conversação.",
  },
  {
    q: "Existe certificação ao concluir os cursos?",
    a: "Sim. A trilha é baseada no Quadro Comum Europeu de Referência para Línguas (CEFR) e você recebe certificação a cada nível concluído.",
  },
];

export const bioData = {
  paragraphs: [
    "Aos 18 anos, Bia tomou a ousada decisão de se mudar para Londres. Durante cinco anos na cidade, ela desenvolveu uma profunda compreensão das dificuldades de aprender um novo idioma e criou um método inovador para superá-las.",
    "Certificada pelo EVENDINE COLLEGE e RICHMOND COLLEGE, e formada em Letras pela Universidade Anhembi-Morumbi, Bia teve o privilégio de ensinar inglês em grandes empresas como Google, Facebook, LinkedIn e Renault, acumulando uma vasta experiência.",
    "Ela também atuou como vice-diretora e professora de inglês no Instituto Futuro de Excelência, contribuindo para a transformação social por meio da educação. Com conhecimentos em Pedagogia Neurolinguística, gerenciou com sucesso sua própria empresa.",
    "Atualmente, Bia mora em Sacramento, Califórnia, onde ensina inglês para alunos intercambistas na Eagle Sacramento e Eagle Silicon Valley.",
    "Casada e mãe de três filhos, Bia está sempre em busca de novos desafios. Inspire-se com sua trajetória e aproveite a oportunidade de aprender inglês na Teacher Bia Vieira Academy. Transforme sua vida através da educação!",
  ],
  milestones: [
    { y: "18 anos", t: "Decide se mudar para Londres atrás de fluência real." },
    { y: "5 anos", t: "Vive em Londres e cria o método inovador." },
    { y: "Certificações", t: "EVENDINE College e RICHMOND College." },
    { y: "Letras", t: "Formada pela Universidade Anhembi-Morumbi." },
    { y: "Big Techs", t: "Ensinou na Google, Facebook, LinkedIn e Renault." },
    { y: "Sacramento, CA", t: "Hoje ensina na Eagle Sacramento e Eagle Silicon Valley." },
  ],
};
