"use client";

import { motion } from "framer-motion";
import { links } from "@/lib/config";

export default function Metodologia() {
  return (
    <section
      id="metodologia"
      className="relative py-24 lg:py-36 bg-cream overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="eyebrow text-orange mb-5">
              <span className="h-px w-8 bg-orange/60" />
              Metodologia
            </div>
            <h2 className="font-display text-4xl lg:text-5xl leading-[1.1] text-deep font-light">
              Aprenda inglês no seu ritmo, com uma{" "}
              <span className="italic text-orange">metodologia personalizada</span>.
            </h2>
            <p className="mt-6 text-lg text-ink-soft leading-relaxed">
              Cada aluno tem um plano de estudo único, adaptado ao seu nível,
              objetivo e tempo disponível. Você não estuda o que todo mundo
              estuda. Você estuda o que faz sentido pra você, agora.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Trilha CEFR do iniciante ao avançado",
                "Foco em listening e speaking",
                "Mais de 31.000 exercícios",
                "Feedback humano da Teacher Bia",
              ].map((it) => (
                <li
                  key={it}
                  className="flex items-start gap-3 text-deep"
                >
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-deep text-cream text-xs">
                    ✓
                  </span>
                  <span className="font-medium">{it}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a
                href={links.whatsapp}
                target="_blank"
                rel="noopener"
                className="btn-primary"
              >
                Eu Quero Começar
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
            </div>
          </motion.div>

          {/* Vídeo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 relative"
          >
            <div className="absolute -inset-6 bg-gradient-to-tr from-orange/15 to-deep/10 rounded-[2.5rem] blur-2xl" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-deep/10 aspect-video bg-deep">
              <iframe
                src={`https://www.youtube.com/embed/${links.youtubeId}?rel=0&modestbranding=1`}
                title="Apresentação Teacher Bia Vieira"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
