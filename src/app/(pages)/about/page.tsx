import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import type { Metadata } from "next";
import SectionPageTitle from "@/components/sections/section-page-title";
import SectionChecklist from "@/components/sections/section-checklist";
import SectionCTALayout4 from "@/components/sections/section-cta-layout-4";
import SectionStats from "@/components/sections/section-stats";
import SectionTeam from "@/components/sections/section-team";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "About",
  description: "About page",
};

export default function PageAbout() {
  return (
    <>
      <Header />
      <main className="relative">
        <SectionPageTitle
          subtitle="¡Hola! Soy Marcelo, un apasionado kinesiólogo con 12 años de experiencia dedicados al fascinante mundo de la traumatología y ortopedia."
        >
          Acerca de
        </SectionPageTitle>
        <SectionChecklist />
        <SectionStats />
        <SectionCTALayout4 />
      </main>
      <Footer />
    </>
  );
}
