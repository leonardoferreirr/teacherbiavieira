"use client";

import { motion } from "framer-motion";
import { pricing, links } from "@/lib/config";

const plans = [pricing.basico, pricing.premium];

export default function Oferta() {
  return (
    <section id="planos" className="relative py-24 lg:py-36 bg-cream overflow-hidden">
      <div className="aurora bg-orange/15 -top-32 left-1/2 -translate-x-1/2 opacity-50" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="eyebrow text-orange mb-5 justify-center">
            <span className="h-px w-8 bg-orange/60" />
            Planos
            <span className="h-px w-8 bg-orange/60" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl text-deep font-light leading-[1.1]">
            Valor especial,{" "}
            <span className="italic text-orange">por tempo limitado</span>.
          </h2>
          <p className="mt-6 text-lg text-ink-soft leading-relaxed">
            Escolha o plano que faz sentido pra você. Ambos com a metodologia,
            a plataforma e o feedback direto da Teacher Bia.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((p, i) => {
            const isHighlight = "highlight" in p && p.highlight;
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className={`relative rounded-[2rem] p-8 lg:p-10 transition-all duration-500 ${
                  isHighlight
                    ? "bg-deep text-cream shadow-[0_40px_80px_-30px_rgba(3,53,47,0.55)] lg:-translate-y-3 ring-1 ring-gold/30"
                    : "bg-cream-warm text-deep ring-1 ring-deep/8"
                }`}
              >
                {isHighlight && "badge" in p && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-orange text-white text-xs font-semibold tracking-wider uppercase">
                    {p.badge}
                  </span>
                )}

                <h3
                  className={`font-display text-3xl font-medium mb-1 ${
                    isHighlight ? "text-cream" : "text-deep"
                  }`}
                >
                  {p.title}
                </h3>
                <p
                  className={`text-sm mb-8 ${
                    isHighlight ? "text-cream/70" : "text-ink-soft"
                  }`}
                >
                  {p.subtitle}
                </p>

                <div className="flex items-baseline gap-2 mb-8">
                  <span className="font-display text-5xl lg:text-6xl font-light">
                    {p.price}
                  </span>
                  <span
                    className={`text-base ${
                      isHighlight ? "text-cream/65" : "text-ink-mute"
                    }`}
                  >
                    {p.period}
                  </span>
                </div>

                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener"
                  className={`btn-primary w-full ${
                    isHighlight ? "" : "!bg-deep !shadow-[0_8px_24px_-8px_rgba(3,53,47,0.5)] hover:!bg-deep-2"
                  }`}
                  /* ORIGINAL: label era "FALAR COM ATENDENTE" */
                >
                  {p.cta}
                </a>

                <ul className="mt-8 space-y-3">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-3 text-[0.95rem] ${
                        isHighlight ? "text-cream/85" : "text-ink-soft"
                      }`}
                    >
                      <span
                        className={`mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full text-xs ${
                          isHighlight
                            ? "bg-gold text-deep"
                            : "bg-deep text-cream"
                        }`}
                      >
                        ✓
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-ink-soft mb-4">
            Tá em dúvida sobre qual plano é o seu?
          </p>
          <a
            href={links.whatsappVendas}
            target="_blank"
            rel="noopener"
            className="btn-ghost"
          >
            Falar com nossa equipe no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
