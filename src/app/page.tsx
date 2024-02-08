import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SectionCTA from "@/components/sections/section-cta";
import SectionHero from "@/components/sections/section-hero";
import SectionIconBoxes from "@/components/sections/section-icon-boxes";
import SectionLatestNews from "@/components/sections/section-latest-news";
import SectionPromo from "@/components/sections/section-promo";
import SectionTestimonialsSlider from "@/components/sections/section-testimonials-slider";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <SectionHero />
        <SectionIconBoxes />
        <SectionPromo />
        <SectionTestimonialsSlider />
        <SectionLatestNews />
        <SectionCTA />
      </main>
      <Footer />
    </>
  );
}
