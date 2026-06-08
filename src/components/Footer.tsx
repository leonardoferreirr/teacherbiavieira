import Image from "next/image";
import { links } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-deep text-cream/75 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-cream/10">
          <div className="md:col-span-5">
            <Image
              src="/img/logo_biavieira-10-1.webp"
              alt="Teacher Bia Vieira"
              width={160}
              height={56}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="mt-5 max-w-sm text-cream/65 leading-relaxed">
              Inglês no seu ritmo, com metodologia personalizada e
              acompanhamento real. Da primeira palavra à fluência.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.18em] text-gold mb-4">
              Navegação
            </div>
            <ul className="space-y-2">
              {[
                ["Metodologia", "#metodologia"],
                ["Plataforma", "#plataforma"],
                ["Jornada", "#jornada"],
                ["Planos", "#planos"],
                ["FAQ", "#faq"],
              ].map(([l, h]) => (
                <li key={h}>
                  <a
                    href={h}
                    className="hover:text-cream transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.18em] text-gold mb-4">
              Contato
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href={links.whatsappVendas}
                  target="_blank"
                  rel="noopener"
                  className="hover:text-cream transition-colors"
                >
                  WhatsApp Vendas
                </a>
              </li>
              <li>
                <a
                  href={links.whatsappSuporte}
                  target="_blank"
                  rel="noopener"
                  className="hover:text-cream transition-colors"
                >
                  WhatsApp Suporte
                </a>
              </li>
              <li>
                <a
                  href={links.flexgeLogin}
                  target="_blank"
                  rel="noopener"
                  className="hover:text-cream transition-colors"
                >
                  Acesso do aluno
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-cream/55">
          <div>
            © {new Date().getFullYear()} Teacher Bia Vieira Academy. Todos os
            direitos reservados.
          </div>
          <div>Aprenda inglês com confiança.</div>
        </div>
      </div>
    </footer>
  );
}
