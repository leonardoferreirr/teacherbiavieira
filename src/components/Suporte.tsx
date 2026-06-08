"use client";

import { motion } from "framer-motion";
import { links } from "@/lib/config";

export default function Suporte() {
  return (
    <section className="relative py-20 lg:py-28 bg-deep grain overflow-hidden">
      <div className="aurora text-orange/35 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden />

      <div className="relative z-10 mx-auto max-w-4xl px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="eyebrow text-gold mb-5 justify-center">
            <span className="h-px w-8 bg-gold/60" />
            Suporte
            <span className="h-px w-8 bg-gold/60" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl text-cream font-light leading-[1.1]">
            Precisa de{" "}
            <span className="italic text-gold">suporte?</span>
          </h2>
          <p className="mt-6 text-lg text-cream/70 leading-relaxed max-w-xl mx-auto">
            Já é aluno e precisa de ajuda? Clique no botão abaixo e fale com a
            nossa equipe direto pelo WhatsApp.
          </p>
          <div className="mt-8">
            <a
              href={links.whatsappSuporte}
              target="_blank"
              rel="noopener"
              className="btn-primary"
              /* ORIGINAL: label era "PRECISO DE AJUDA!" */
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1.1-1.1 2.6 0 1.5 1.1 3 1.3 3.2.2.2 2.2 3.4 5.4 4.7 2.7 1.1 3.2.9 3.8.8.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.1-1.4-.1-.1-.2-.2-.5-.3z" />
              </svg>
              Preciso de Ajuda
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
