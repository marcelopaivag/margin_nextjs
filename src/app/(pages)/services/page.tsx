import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import type { Metadata } from "next";
import SectionPageTitle from "@/components/sections/section-page-title";
import SectionIconBoxes from "@/components/sections/section-icon-boxes";
import SectionCTALayout4 from "@/components/sections/section-cta-layout-4";
import SectionPromoVideo from "@/components/sections/section-promo-video";
import SectionIconBoxesLayout3 from "@/components/sections/section-icon-boxes-layout-3";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "Services",
  description: "Services page",
};

export default function PageServices() {
  return (
    <>
      <Header />
      <main className="relative">
        <SectionPageTitle subtitle="Ofrecemos kinesiología para optimizar la recuperación, el rendimiento y aliviar el dolor.">
          Servicios
        </SectionPageTitle>
        <SectionIconBoxes noTitle />
        <SectionPromoVideo />
        <SectionIconBoxesLayout3 />
        <SectionCTALayout4 />
      </main>
      <Footer />
    </>
  );
}
