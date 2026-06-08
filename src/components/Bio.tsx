"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { bioData, links } from "@/lib/config";

export default function Bio() {
  return (
    <section className="relative py-24 lg:py-36 bg-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Foto + adorno */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              <div className="absolute -inset-6 bg-gradient-to-br from-orange/20 to-gold/15 blur-3xl rounded-full" />
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-deep/10">
                <Image
                  src="/img/img-03.webp"
                  alt="Teacher Bia Vieira"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 80vw, 35vw"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 glass-light rounded-2xl p-5 shadow-xl max-w-[14rem]">
                <div className="text-xs text-ink-mute uppercase tracking-[0.18em] mb-1">
                  Teacher Bia
                </div>
                <div className="font-display text-deep text-lg leading-tight">
                  De Londres a Sacramento, virou método.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="eyebrow text-orange mb-5">
              <span className="h-px w-8 bg-orange/60" />
              Conheça a Teacher
            </div>
            <h2 className="font-display text-4xl lg:text-5xl text-deep font-light leading-[1.1]">
              A história por trás da{" "}
              <span className="italic text-orange">Bia Vieira</span>.
            </h2>

            <div className="mt-6 space-y-4 text-ink-soft leading-relaxed">
              {bioData.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? "text-lg" : ""}>
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-3">
              {bioData.milestones.map((m) => (
                <div
                  key={m.y}
                  className="rounded-2xl bg-cream-warm p-4 ring-1 ring-deep/8"
                >
                  <div className="font-display text-orange text-lg font-medium">
                    {m.y}
                  </div>
                  <div className="text-sm text-ink-soft leading-snug">
                    {m.t}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href={links.whatsapp}
                target="_blank"
                rel="noopener"
                className="btn-primary"
              >
                Quero Aprender Com a Bia
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
