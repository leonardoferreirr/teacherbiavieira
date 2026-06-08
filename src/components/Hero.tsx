"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { links } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-deep grain">
      {/* Auroras de fundo */}
      <div
        className="aurora bg-deep-3 -top-32 -left-32"
        aria-hidden
      />
      <div
        className="aurora bg-orange/40 -bottom-40 -right-40"
        aria-hidden
      />
      <div
        className="aurora bg-deep-2 top-1/3 left-1/2 -translate-x-1/2 opacity-30"
        aria-hidden
      />

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8 pt-36 pb-24 lg:pt-44 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 text-cream"
          >
            <div className="eyebrow text-gold mb-6">
              <span className="h-px w-8 bg-gold/60" />
              Bia Vieira Academy
            </div>

            <h1 className="font-display text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl font-light text-cream">
              Descubra o método que já fez
              <span className="block italic font-normal text-gold">
                centenas de pessoas
              </span>
              falarem inglês com confiança.
            </h1>

            <p className="mt-8 text-lg lg:text-xl text-cream/75 max-w-xl leading-relaxed font-light">
              Plataforma personalizada, feedback direto da Teacher Bia, plantão
              de dúvidas e prática real de conversação. Tudo no seu ritmo,
              dentro da sua rotina.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#planos"
                className="btn-primary"
                /* ORIGINAL: label era "FALAR COM ATENDENTE" */
              >
                Quero Estudar Agora
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href={links.whatsappVendas}
                target="_blank"
                rel="noopener"
                className="btn-ghost btn-on-dark"
              >
                Falar no WhatsApp
              </a>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-8 text-cream/60 text-sm">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-deep bg-gradient-to-br from-gold to-orange"
                    />
                  ))}
                </div>
                <span>+ 500 alunos ativos</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-gold">★★★★★</span>
                <span>Avaliação dos alunos</span>
              </div>
            </div>
          </motion.div>

          {/* Imagem / mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-gold/20 to-orange/10 blur-2xl" />
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden glass shadow-2xl">
                <Image
                  src="/img/Frame-12.webp"
                  alt="Teacher Bia Vieira"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 80vw, 40vw"
                />
              </div>

              {/* Floating cards */}
              <motion.div
                className="absolute -left-6 top-1/3 glass rounded-2xl px-4 py-3 text-cream float-y"
                style={{ animationDelay: "0s" }}
              >
                <div className="text-xs text-cream/60">Hoje</div>
                <div className="text-sm font-semibold">
                  +12 exercícios feitos
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-4 bottom-12 glass rounded-2xl px-4 py-3 text-cream float-y"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="text-xs text-cream/60">Speaking</div>
                <div className="text-sm font-semibold">
                  Pronúncia 94% ✓
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div
        className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-cream/5 pointer-events-none"
        aria-hidden
      />
    </section>
  );
}
