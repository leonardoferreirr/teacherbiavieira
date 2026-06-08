"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { diferenciais } from "@/lib/config";

export default function Diferenciais() {
  return (
    <section className="relative py-24 lg:py-36 bg-deep grain overflow-hidden">
      <div className="aurora bg-deep-3 top-0 left-0 opacity-40" aria-hidden />
      <div className="aurora bg-orange/30 bottom-0 right-0 opacity-30" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Imagem decorativa */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-tr from-gold/30 to-orange/20 blur-3xl rounded-full" />
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden glass shadow-2xl">
                <Image
                  src="/img/img-02.webp"
                  alt="Estudando com a Teacher Bia"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 80vw, 35vw"
                />
              </div>
            </div>
          </motion.div>

          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-cream"
          >
            <div className="eyebrow text-gold mb-5">
              <span className="h-px w-8 bg-gold/60" />
              Por que escolher
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-light leading-[1.1] mb-8">
              Por que escolher a{" "}
              <span className="italic text-gold">Bia Vieira Academy?</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-5">
              {diferenciais.map((d, i) => (
                <motion.div
                  key={d.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass rounded-2xl p-6"
                >
                  <h3 className="font-display text-xl text-cream font-medium mb-2">
                    {d.title}
                  </h3>
                  <p className="text-cream/65 text-[0.95rem] leading-relaxed">
                    {d.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
