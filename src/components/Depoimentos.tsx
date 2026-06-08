"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/config";

function Card({ t }: { t: (typeof testimonials)[number] }) {
  const initials = t.name
    .split(" ")
    .map((s) => s[0])
    .slice(0, 2)
    .join("");

  return (
    <article className="shrink-0 w-[min(85vw,420px)] rounded-3xl bg-cream p-7 ring-1 ring-deep/8 shadow-[0_20px_50px_-30px_rgba(3,53,47,0.3)]">
      <div className="flex items-center gap-4 mb-5">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-deep to-deep-3 grid place-items-center text-cream font-display text-lg">
          {initials}
        </div>
        <div>
          <div className="font-semibold text-deep">{t.name}</div>
          <div className="text-sm text-ink-mute">{t.role}</div>
        </div>
        <div className="ml-auto text-orange text-sm tracking-wider">★★★★★</div>
      </div>
      <p className="text-ink-soft leading-relaxed text-[0.95rem]">
        “{t.text}”
      </p>
    </article>
  );
}

export default function Depoimentos() {
  // duplica pra criar loop infinito sem corte
  const loop = [...testimonials, ...testimonials];

  return (
    <section
      id="depoimentos"
      className="relative py-24 lg:py-32 bg-cream-warm overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl mx-auto px-4 lg:px-8 mb-16"
      >
        <div className="eyebrow text-orange mb-5 justify-center">
          <span className="h-px w-8 bg-orange/60" />
          Depoimentos
          <span className="h-px w-8 bg-orange/60" />
        </div>
        <h2 className="font-display text-4xl lg:text-5xl text-deep font-light leading-[1.1]">
          O que os alunos dizem da{" "}
          <span className="italic text-orange">Bia Vieira Academy</span>.
        </h2>
      </motion.div>

      <div className="relative marquee-pause">
        {/* fades laterais */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cream-warm to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cream-warm to-transparent z-10" />

        <div
          className="marquee-track flex gap-5 w-max"
          style={{ willChange: "transform" }}
        >
          {loop.map((t, i) => (
            <Card key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
