"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Flexibilidade total",
    text: "Estude quando e onde quiser. Plataforma 24h por dia no computador ou celular.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
        <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Relatórios de progresso",
    text: "Acompanhe seu desempenho ao longo do curso com mais de 31.000 exercícios.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M4 19V5M4 19h16M8 16v-6M12 16V8M16 16v-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Trilha CEFR completa",
    text: "Do iniciante ao avançado, baseada no Quadro Comum Europeu de Referência.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M4 6l8-3 8 3-8 3-8-3zM4 6v8c0 2 4 4 8 4s8-2 8-4V6" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "4 habilidades em paralelo",
    text: "Listening, speaking, reading e writing, com ênfase especial em conversação.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M12 18a6 6 0 100-12 6 6 0 000 12zM12 18v3M9 21h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M9 11a3 3 0 003-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Gamificação para Kids",
    text: "Flexge Kids é totalmente gamificada, com visualização de resultados pelos pais.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M5 12a7 7 0 1114 0v3a4 4 0 01-4 4H9a4 4 0 01-4-4v-3z" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="9" cy="12" r="1.4" fill="currentColor" />
        <circle cx="15" cy="12" r="1.4" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Certificação por nível",
    text: "A cada curso concluído, você recebe certificação com comprovação de proficiência.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <circle cx="12" cy="10" r="5" stroke="currentColor" strokeWidth="1.7" />
        <path d="M9 14l-2 7 5-3 5 3-2-7" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Plataforma() {
  return (
    <section
      id="plataforma"
      className="relative py-24 lg:py-36 bg-deep grain overflow-hidden"
    >
      <div className="aurora bg-deep-3 -top-40 -left-40 opacity-40" aria-hidden />
      <div className="aurora bg-orange/30 -bottom-40 -right-40 opacity-30" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="eyebrow text-gold mb-5">
            <span className="h-px w-8 bg-gold/60" />
            Plataforma
          </div>
          <h2 className="font-display text-4xl lg:text-5xl text-cream font-light leading-[1.1]">
            Uma <span className="italic text-gold">plataforma tecnológica</span>{" "}
            feita para o seu aprendizado.
          </h2>
          <p className="mt-6 text-lg text-cream/70 leading-relaxed max-w-2xl">
            Tudo o que você precisa para aprender inglês com consistência,
            organização e acompanhamento real. Sem perder tempo procurando o que
            estudar.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass rounded-3xl p-7 text-cream hover:bg-white/10 transition-colors"
            >
              <div className="inline-flex p-2.5 rounded-2xl bg-gold/15 text-gold mb-5">
                {f.icon}
              </div>
              <h3 className="font-display text-xl text-cream font-medium mb-2">
                {f.title}
              </h3>
              <p className="text-cream/65 leading-relaxed text-[0.95rem]">
                {f.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
