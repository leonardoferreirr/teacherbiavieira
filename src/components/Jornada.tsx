"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { journey } from "@/lib/config";

function StackCard({
  i,
  total,
  progress,
  item,
}: {
  i: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  item: (typeof journey)[number];
}) {
  // Cada card entra em sua faixa: i / total a (i+1)/total
  const start = i / total;
  const end = (i + 1) / total;
  const y = useTransform(progress, [start, end], [80, 0]);
  const scale = useTransform(progress, [start, end], [0.94, 1]);
  const opacity = useTransform(progress, [start - 0.02, start, end], [0, 1, 1]);

  return (
    <motion.div
      style={{ y, scale, opacity }}
      className="sticky top-24 lg:top-32"
    >
      <div className="relative rounded-[2rem] overflow-hidden bg-cream shadow-[0_30px_80px_-30px_rgba(3,53,47,0.35)] ring-1 ring-deep/8">
        <div className="grid lg:grid-cols-12 gap-0">
          <div className="lg:col-span-7 p-8 lg:p-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-display text-5xl lg:text-6xl text-orange font-light leading-none">
                {item.n}
              </span>
              <span className="text-ink-mute text-sm uppercase tracking-[0.2em]">
                Passo {i + 1} de {total}
              </span>
            </div>
            <h3 className="font-display text-3xl lg:text-4xl text-deep leading-tight mb-4">
              {item.title}
            </h3>
            <p className="text-lg text-ink-soft leading-relaxed max-w-md">
              {item.text}
            </p>
          </div>
          <div className="lg:col-span-5 bg-gradient-to-br from-deep to-deep-2 p-10 lg:p-14 flex items-center justify-center">
            <div className="text-cream/70 font-display text-[10rem] leading-none italic select-none">
              {item.n}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Jornada() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

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

        {/* Container alto pro sticky stack acontecer */}
        <div
          ref={containerRef}
          className="relative"
          style={{ height: `${journey.length * 90}vh` }}
        >
          <div className="space-y-8">
            {journey.map((item, i) => (
              <StackCard
                key={item.n}
                i={i}
                total={journey.length}
                progress={scrollYProgress}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
