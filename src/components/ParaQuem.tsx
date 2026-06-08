"use client";

import { motion } from "framer-motion";
import { audiences, links } from "@/lib/config";

export default function ParaQuem() {
  return (
    <section id="para-quem" className="relative py-24 lg:py-36 bg-cream">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="eyebrow text-orange mb-5">
            <span className="h-px w-8 bg-orange/60" />
            Para Quem
          </div>
          <h2 className="font-display text-4xl lg:text-5xl text-deep font-light leading-[1.1]">
            Para quem é a{" "}
            <span className="italic text-orange">Bia Vieira Academy?</span>
          </h2>
          <p className="mt-6 text-lg text-ink-soft leading-relaxed max-w-2xl">
            Aulas adaptadas a cada fase da vida. Da criança que está começando
            a curtir o idioma ao adulto que precisa dominar pra trabalho ou
            viagem.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {audiences.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-3xl p-7 bg-gradient-to-br from-mint to-cream-warm ring-1 ring-deep/8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-25px_rgba(3,53,47,0.3)] flex flex-col"
            >
              <div className="text-4xl mb-4">{a.icon}</div>
              <h3 className="font-display text-xl text-deep font-medium mb-3">
                {a.title}
              </h3>
              <p className="text-ink-soft leading-relaxed text-[0.92rem] mb-6 flex-1">
                {a.text}
              </p>

              <a
                href={links.whatsapp}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-deep text-cream text-sm font-semibold hover:bg-deep-2 transition-colors"
              >
                Quero me Inscrever
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-orange to-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
