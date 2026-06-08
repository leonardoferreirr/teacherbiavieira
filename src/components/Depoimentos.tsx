"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/config";

function Card({
  t,
  i,
}: {
  t: (typeof testimonials)[number];
  i: number;
}) {
  const initials = t.name
    .split(" ")
    .map((s) => s[0])
    .slice(0, 2)
    .join("");

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
      className="rounded-3xl bg-cream p-7 ring-1 ring-deep/8 shadow-[0_20px_50px_-30px_rgba(3,53,47,0.3)] flex flex-col"
    >
      <div className="flex items-center gap-4 mb-5">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-deep to-deep-3 grid place-items-center text-cream font-display text-lg shrink-0">
          {initials}
        </div>
        <div className="min-w-0">
          <div className="font-semibold text-deep truncate">{t.name}</div>
          <div className="text-sm text-ink-mute truncate">{t.role}</div>
        </div>
        <div className="ml-auto text-orange text-sm tracking-wider whitespace-nowrap">
          ★★★★★
        </div>
      </div>
      <p className="text-ink-soft leading-relaxed text-[0.95rem] flex-1">
        “{t.text}”
      </p>
    </motion.article>
  );
}

export default function Depoimentos() {
  return (
    <section
      id="depoimentos"
      className="relative py-24 lg:py-32 bg-cream-warm"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <Card key={t.name} t={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
