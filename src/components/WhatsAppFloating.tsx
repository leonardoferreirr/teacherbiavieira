"use client";

import { useEffect, useState } from "react";
import { links } from "@/lib/config";

export default function WhatsAppFloating() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={links.whatsappVendas}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
      className={`fixed bottom-6 right-6 z-40 group transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-orange/40 blur-2xl group-hover:bg-orange/60 transition-colors" />
        <div className="relative flex items-center gap-3 pl-4 pr-5 py-3 rounded-full bg-orange text-white shadow-[0_12px_30px_-8px_rgba(255,105,0,0.6)] hover:bg-orange-2 transition-colors">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.5 3.5C18.3 1.3 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.1 1.6 5.9L0 24l6.3-1.6c1.7.9 3.7 1.5 5.7 1.5 6.6 0 12-5.4 12-12 0-3.2-1.3-6.3-3.5-8.4zM12 22c-1.9 0-3.7-.5-5.3-1.4l-.4-.2-3.9 1 1-3.8-.3-.4c-1-1.6-1.5-3.4-1.5-5.2C1.6 6.4 6.3 1.6 12 1.6c2.7 0 5.3 1.1 7.2 3 1.9 1.9 3 4.5 3 7.2 0 5.7-4.8 10.4-10.2 10.4zm5.8-7.7c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.7-.9-2.3-.3-.6-.6-.5-.8-.5h-.7c-.2 0-.5.1-.8.4-.3.3-1.1 1.1-1.1 2.6 0 1.5 1.1 3 1.3 3.2.2.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.7.7.2 1.4.2 1.9.1.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.4z" />
          </svg>
          <span className="text-sm font-semibold whitespace-nowrap">
            Falar agora
          </span>
        </div>
      </div>
    </a>
  );
}
