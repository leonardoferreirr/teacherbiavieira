/**
 * Configuração central do site da Teacher Bia Vieira.
 * Todos os links críticos ficam aqui, mapeados a partir do HTML original
 * (arquivado em /Users/Leonardo/Downloads/teacherbiavieira.com).
 *
 * CONFIRMAR no preview final com a cliente antes de apontar DNS.
 */

export const links = {
  // Hotmart: 2 planos identificados via preço próximo no HTML original
  // R$ 170,43 = plano básico (1 aula semanal)
  hotmartBasico: "https://pay.hotmart.com/T94784082H",
  // R$ 341,48 = plano premium (com aulão quinzenal)
  hotmartPremium: "https://pay.hotmart.com/V94784442Y",

  // WhatsApp
  whatsappVendas: "https://wa.me/message/KIIZGVUEIKI5N1",
  whatsappSuporte: "https://wa.me/message/I4GPS6CCNQSBO1",

  // Vídeo de apresentação (YouTube embed do site atual)
  youtubeId: "ecBtLiwkvfo",

  // Plataforma do aluno: o HTML não trazia URL direta. Coloquei o app oficial
  // da Flexge. Se a Bia tiver um link customizado, substituir aqui.
  flexgeLogin: "https://app.flexge.com/",
} as const;

export const pricing = {
  basico: {
    title: "Plano Essencial",
    subtitle: "Ideal para quem está começando a jornada",
    price: "R$ 170,43",
    period: "/ mês",
    href: links.hotmartBasico,
    cta: "Quero Estudar Agora",
    features: [
      "Teste de nivelamento preciso",
      "Plano de estudo personalizado",
      "Acesso à plataforma Flexge 24/7",
      "Mais de 31.000 exercícios interativos",
      "Feedback personalizado da Teacher Bia",
      "Plantão de dúvidas",
      "1 aula semanal em grupo focada em conversação",
    ],
    highlight: false,
  },
  premium: {
    title: "Plano Premium",
    subtitle: "Para quem quer acelerar a fluência",
    price: "R$ 341,48",
    period: "/ mês",
    href: links.hotmartPremium,
    cta: "Quero o Premium",
    features: [
      "Tudo do Plano Essencial",
      "Aulões quinzenais ao vivo",
      "Acompanhamento mais próximo",
      "Plantão estendido de dúvidas",
      "Acesso a conteúdos exclusivos da Teacher Bia",
      "Suporte prioritário",
    ],
    highlight: true,
    badge: "Mais escolhido",
  },
};

export const testimonials = [
  {
    name: "Aluna Iniciante",
    role: "Plataforma Teacher Bia Vieira",
    photo: null,
    text: "Sou aluna da Plataforma Teacher Bia Vieira e minha experiência tem sido fantástica. Além do excelente suporte oferecido pela plataforma e pela equipe, a ferramenta de ensino em inglês trabalha de maneira dinâmica todas as habilidades, escuta, escrita e pronúncia. Até o momento, não encontrei nada igual no mercado.",
  },
  {
    name: "Aluna Mobile",
    role: "Estuda pelo celular",
    photo: null,
    text: "A Plataforma Teacher Bia Vieira tem me ajudado bastante no aprendizado do inglês. Consigo fazer os exercícios através do meu celular, conforme a minha disponibilidade, de forma prática e interativa. Gosto muito de ouvir minha gravação para exercícios de speaking, assim consigo avaliar a minha pronúncia.",
  },
  {
    name: "Aluna Profissional",
    role: "Aulas particulares + plataforma",
    photo: null,
    text: "A experiência com a professora Beatriz e a plataforma Bia Vieira Academy tem sido surpreendente. As aulas particulares são envolventes e eficazes, e a plataforma complementa perfeitamente o aprendizado. Estou satisfeita com os resultados, tanto no âmbito pessoal quanto profissional.",
  },
  {
    name: "Juliana Morgenstern",
    role: "Terapeuta integrativa",
    photo: null,
    text: "A plataforma de inglês Flexge da Teacher Bia Vieira foi pontual no que estava procurando. Buscava o inglês para ter acesso a estudos e pesquisas mais aprofundados sobre os temas da minha atuação. Além dos exercícios práticos, o feedback da teacher me trouxe clareza e ajuste no formato de estudo.",
  },
  {
    name: "Mãe de Dois Alunos",
    role: "Filhos de 6 e 10 anos",
    photo: null,
    text: "A plataforma de inglês da professora Bia foi muito boa para meus filhos. Tem desenvolvido o inglês, principalmente do meu filho de 10 anos. Para minha menina de 6 anos é mais lúdico, eu escuto ela cantando as músicas em inglês e já tem experimentado algumas frases do dia a dia.",
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
    title: "Plano Personalizado",
    text: "Com base no resultado, você recebe um plano de estudo adaptado ao seu nível e seu ritmo.",
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
    title: "Aulão de Conversação",
    text: "Encontros ao vivo focados em prática real de fala, pra você ganhar fluência de verdade.",
  },
];

export const audiences = [
  {
    title: "Crianças",
    text: "Aulas gamificadas e interativas focadas em fala e escuta. Conteúdos dinâmicos que estimulam curiosidade e criatividade.",
    icon: "🧒",
  },
  {
    title: "Pré-Adolescentes",
    text: "Suporte para estudos escolares e futuros desafios, preparando para exames e oportunidades acadêmicas.",
    icon: "📚",
  },
  {
    title: "Adolescentes",
    text: "Metodologia que combina rotina escolar com conversação real, prepara para vestibulares e intercâmbio.",
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
  {
    title: "Acompanhamento real",
    text: "Você acompanha seu desenvolvimento com relatórios detalhados e análises do seu progresso.",
  },
  {
    title: "Comunidade ativa",
    text: "Conecte-se com outros alunos, compartilhe experiências e dicas de aprendizado.",
  },
  {
    title: "Feedback direto da Teacher",
    text: "Sem fila de espera. A Bia analisa sua pronúncia, sua escrita e responde diretamente pela plataforma.",
  },
  {
    title: "Certificação reconhecida",
    text: "Cada nível concluído gera certificado baseado no Quadro Comum Europeu de Referência (CEFR).",
  },
];

export const faq = [
  {
    q: "Como faço para me inscrever na Bia Vieira Academy?",
    a: "Você clica em qualquer botão de inscrição, conclui o checkout e em seguida faz o teste de nivelamento. A partir do resultado, recebe seu plano de estudos personalizado.",
  },
  {
    q: "Quanto tempo leva para ver resultados no aprendizado?",
    a: "Os resultados variam conforme o esforço e a dedicação de cada aluno, mas a maioria começa a sentir progresso significativo em poucas semanas de estudo consistente.",
  },
  {
    q: "A plataforma é adequada para iniciantes?",
    a: "Sim. A metodologia foi desenhada para atender desde o nível iniciante absoluto até o avançado, com trilha personalizada para cada ponto de partida.",
  },
  {
    q: "Posso estudar pelo celular?",
    a: "Sim. A plataforma Flexge funciona no navegador e no aplicativo móvel, com acesso 24h por dia, em qualquer lugar.",
  },
  {
    q: "Tenho acesso a aulas com a Teacher Bia?",
    a: "Sim. Você recebe feedbacks personalizados da Bia dentro da plataforma e participa de aulões ao vivo focados em conversação. O Plano Premium inclui aulões quinzenais.",
  },
  {
    q: "Existe certificação ao concluir os cursos?",
    a: "Sim. A trilha é baseada no Quadro Comum Europeu de Referência para Línguas (CEFR) e você recebe certificação a cada nível concluído.",
  },
];
