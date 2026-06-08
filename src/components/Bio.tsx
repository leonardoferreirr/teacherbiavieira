"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const milestones = [
  { y: "18 anos", t: "Decide se mudar para Londres atrás de fluência real." },
  { y: "5 anos", t: "Vive em Londres aprendendo o idioma na pele." },
  { y: "Certificações", t: "EVENDINE College e RICHMOND College." },
  { y: "Letras", t: "Formada pela Universidade Anhembi-Morumbi." },
  { y: "Empresas", t: "Ensinou inglês na Google, Facebook, LinkedIn e Renault." },
];

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
                  Anos de Londres viraram método.
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
              A história por trás do{" "}
              <span className="italic text-orange">método Bia Vieira</span>.
            </h2>
            <p className="mt-6 text-lg text-ink-soft leading-relaxed">
              Aos 18 anos, a Bia tomou uma decisão ousada: se mudar pra
              Londres. Foram cinco anos morando lá, aprendendo o idioma na
              prática e entendendo profundamente as dificuldades de quem está
              começando do zero. Foi dessa vivência que nasceu o método.
            </p>
            <p className="mt-4 text-lg text-ink-soft leading-relaxed">
              Certificada pelo EVENDINE College e RICHMOND College, formada em
              Letras pela Universidade Anhembi-Morumbi, a Bia também ensinou
              inglês em grandes empresas como Google, Facebook, LinkedIn e
              Renault, e atuou como vice-diretora pedagógica em escolas de
              idiomas.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-3">
              {milestones.map((m) => (
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
