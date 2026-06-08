"use client";

import { motion } from "framer-motion";
import { pricing, links } from "@/lib/config";

const p = pricing.plano;

export default function Oferta() {
  return (
    <section id="planos" className="relative py-24 lg:py-36 bg-cream overflow-hidden">
      <div className="aurora text-orange/25 -top-32 left-1/2 -translate-x-1/2" aria-hidden />

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
            Investimento
            <span className="h-px w-8 bg-orange/60" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl text-deep font-light leading-[1.1]">
            Valor especial,{" "}
            <span className="italic text-orange">por tempo limitado</span>.
          </h2>
          <p className="mt-6 text-lg text-ink-soft leading-relaxed">
            Aproveite. Tudo incluso, sem letra miúda, sem upgrade depois.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="absolute -inset-6 bg-gradient-to-tr from-orange/20 to-gold/15 rounded-[3rem] blur-3xl" />

          <div className="relative grid lg:grid-cols-12 gap-0 rounded-[2.2rem] overflow-hidden bg-deep text-cream shadow-[0_50px_100px_-30px_rgba(3,53,47,0.55)] ring-1 ring-gold/20">
            {/* Lado esquerdo: preço + CTA */}
            <div className="lg:col-span-5 p-10 lg:p-12 bg-gradient-to-br from-deep to-deep-2 flex flex-col justify-between">
              <div>
                <span className="inline-flex px-3 py-1 rounded-full bg-orange text-white text-[0.7rem] font-semibold tracking-[0.16em] uppercase mb-6">
                  {p.badge}
                </span>
                <h3 className="font-display text-3xl font-medium leading-tight text-cream">
                  {p.title}
                </h3>
                <p className="mt-2 text-cream/65 text-sm">{p.subtitle}</p>
              </div>

              <div className="mt-10">
                <div className="mb-1 text-cream/55 text-sm">
                  de{" "}
                  <span className="line-through">{p.priceFrom}</span>
                  {" "}por
                </div>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="font-display text-5xl lg:text-6xl font-light text-cream">
                    {p.price}
                  </span>
                  <span className="text-base text-cream/65">{p.period}</span>
                </div>

                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener"
                  className="btn-primary w-full"
                >
                  {p.cta}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                <p className="mt-4 text-center text-xs text-cream/50">
                  Falar com a equipe pelo WhatsApp · Resposta rápida
                </p>
              </div>
            </div>

            {/* Lado direito: features */}
            <div className="lg:col-span-7 p-10 lg:p-12 bg-deep">
              <div className="text-xs uppercase tracking-[0.18em] text-gold mb-6">
                O que está incluído
              </div>
              <ul className="space-y-4">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-cream/85 text-[0.97rem]"
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gold text-deep text-sm font-semibold shrink-0">
                      ✓
                    </span>
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.article>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-ink-soft mb-4">
            Quer tirar dúvidas antes de matricular?
          </p>
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener"
            className="btn-ghost"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1.1-1.1 2.6 0 1.5 1.1 3 1.3 3.2.2.2 2.2 3.4 5.4 4.7 2.7 1.1 3.2.9 3.8.8.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.1-1.4-.1-.1-.2-.2-.5-.3z" />
            </svg>
            Falar com a Teacher Bia no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
