"use client";

import { motion } from "framer-motion";
import { diferenciais, links } from "@/lib/config";

export default function Diferenciais() {
  return (
    <section className="relative py-24 lg:py-36 bg-deep grain overflow-hidden">
      <div className="aurora text-gold/30 bottom-0 right-0" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="eyebrow text-gold mb-5 justify-center">
            <span className="h-px w-8 bg-gold/60" />
            Diferenciais
            <span className="h-px w-8 bg-gold/60" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl text-cream font-light leading-[1.1]">
            Por que escolher a{" "}
            <span className="italic text-gold">Bia Vieira Academy?</span>
          </h2>
          <p className="mt-6 text-lg text-cream/70 leading-relaxed">
            Descubra os diferenciais exclusivos que fazem nossos alunos
            ganharem fluência de verdade.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {diferenciais.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="inline-flex p-2 rounded-xl bg-gold/15 text-gold mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-display text-lg text-cream font-medium mb-2 leading-tight">
                {d.title}
              </h3>
              <p className="text-cream/65 text-sm leading-relaxed">{d.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener"
            className="btn-primary"
          >
            Eu Quero Começar
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
