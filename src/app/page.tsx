import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Metodologia from "@/components/Metodologia";
import Plataforma from "@/components/Plataforma";
import Jornada from "@/components/Jornada";
import ParaQuem from "@/components/ParaQuem";
import Diferenciais from "@/components/Diferenciais";
import Depoimentos from "@/components/Depoimentos";
import Oferta from "@/components/Oferta";
import Bio from "@/components/Bio";
import Suporte from "@/components/Suporte";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex-1">
        <Hero />
        <Metodologia />
        <Plataforma />
        <Jornada />
        <ParaQuem />
        <Diferenciais />
        <Depoimentos />
        <Oferta />
        <Bio />
        <Suporte />
        <Faq />
      </main>
      <Footer />
      <WhatsAppFloating />
    </>
  );
}
