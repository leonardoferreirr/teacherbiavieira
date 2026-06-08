import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://teacherbiavieira.com"),
  title: "Teacher Bia Vieira Academy | Inglês no seu ritmo, com metodologia personalizada",
  description:
    "Aprenda inglês com uma metodologia personalizada que já ajudou centenas de pessoas a falar com confiança. Plataforma Flexge, feedback direto da Teacher Bia, plantão de dúvidas e aulões ao vivo.",
  openGraph: {
    title: "Teacher Bia Vieira Academy",
    description:
      "Inglês no seu ritmo, com metodologia personalizada. Centenas de alunos já falam com confiança.",
    url: "https://teacherbiavieira.com",
    siteName: "Teacher Bia Vieira Academy",
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        {/* GTM mantido do site WordPress original */}
        <Script id="gtm-head" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-T5QSBWTP');
        `}</Script>
      </head>
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T5QSBWTP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
