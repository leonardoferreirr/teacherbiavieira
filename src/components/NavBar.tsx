"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { links } from "@/lib/config";

const items = [
  { label: "Metodologia", href: "#metodologia" },
  { label: "Plataforma", href: "#plataforma" },
  { label: "Jornada", href: "#jornada" },
  { label: "Para Quem", href: "#para-quem" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <nav
          className={`flex items-center justify-between rounded-full px-4 lg:px-6 py-2.5 transition-all duration-500 ${
            scrolled
              ? "glass-light shadow-[0_10px_40px_-15px_rgba(3,53,47,0.18)]"
              : ""
          }`}
        >
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/img/logo_biavieira-10-1.webp"
              alt="Teacher Bia Vieira"
              width={140}
              height={48}
              className="h-9 w-auto"
              priority
            />
          </Link>

          <ul className="hidden lg:flex items-center gap-7 text-[0.92rem] font-medium text-ink-soft">
            {items.map((it) => (
              <li key={it.href}>
                <a
                  href={it.href}
                  className="hover:text-deep transition-colors"
                >
                  {it.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={links.flexgeLogin}
              target="_blank"
              rel="noopener"
              className="text-sm font-semibold text-deep hover:text-orange transition-colors"
            >
              Sou aluno
            </a>
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener"
              className="btn-primary text-sm"
            >
              Eu Quero Começar
            </a>
          </div>

          <button
            type="button"
            aria-label="Menu"
            className="lg:hidden p-2 rounded-full text-deep"
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d={open ? "M6 6l12 12M6 18L18 6" : "M4 7h16M4 12h16M4 17h16"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </nav>

        {open && (
          <div className="lg:hidden mt-3 glass-light rounded-3xl p-6 shadow-xl">
            <ul className="flex flex-col gap-4 text-deep font-medium">
              {items.map((it) => (
                <li key={it.href}>
                  <a
                    href={it.href}
                    onClick={() => setOpen(false)}
                    className="block py-1"
                  >
                    {it.label}
                  </a>
                </li>
              ))}
              <li className="pt-3 border-t border-deep/10 flex flex-col gap-2">
                <a
                  href={links.flexgeLogin}
                  target="_blank"
                  rel="noopener"
                  className="btn-ghost text-sm"
                >
                  Sou aluno
                </a>
                <a
                  href={links.whatsapp}
                  target="_blank"
                  rel="noopener"
                  className="btn-primary text-sm"
                >
                  Eu Quero Começar
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
