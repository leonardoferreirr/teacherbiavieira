"use client";

import { motion } from "framer-motion";
import { journey } from "@/lib/config";

export default function Jornada() {
  return (
    <section id="jornada" className="relative bg-cream-warm py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="eyebrow text-orange mb-5 justify-center">
            <span className="h-px w-8 bg-orange/60" />
            Sua Jornada
            <span className="h-px w-8 bg-orange/60" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl text-deep font-light leading-[1.1]">
            Como será a sua{" "}
            <span className="italic text-orange">jornada</span> do zero à
            fluência.
          </h2>
          <p className="mt-6 text-lg text-ink-soft leading-relaxed">
            Seis passos simples, encaixados na sua rotina. Você não precisa
            saber por onde começar, nós montamos isso pra você.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 lg:gap-6">
          {journey.map((item, i) => (
            <motion.article
              key={item.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              className="relative overflow-hidden rounded-3xl bg-cream ring-1 ring-deep/8 shadow-[0_20px_60px_-30px_rgba(3,53,47,0.3)] p-8 lg:p-10 hover:-translate-y-1 transition-transform duration-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-display text-5xl text-orange font-light leading-none">
                  {item.n}
                </span>
                <span className="text-ink-mute text-xs uppercase tracking-[0.18em]">
                  Passo {i + 1} de {journey.length}
                </span>
              </div>
              <h3 className="font-display text-2xl lg:text-3xl text-deep leading-tight mb-3">
                {item.title}
              </h3>
              <p className="text-ink-soft leading-relaxed">
                {item.text}
              </p>

              {/* faixa decorativa */}
              <div className="absolute top-0 right-0 w-32 h-32 -translate-y-1/4 translate-x-1/4 bg-gradient-to-br from-orange/10 to-transparent rounded-full pointer-events-none" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
