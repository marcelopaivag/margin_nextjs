import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import type { Metadata } from "next";
import SectionPageTitle from "@/components/sections/section-page-title";
import ProjectList from "@/components/projects/project-list";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "Kinesiología y rehabilitación",
  description: "Projects page",
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="relative">
        <SectionPageTitle
          subtitle="Como kinesiólogo especializado, mi enfoque se centra en brindar servicios de rehabilitación integral en áreas clave como traumatología, deporte y dolor crónico. Con un compromiso sólido hacia el bienestar de mis pacientes, ofrezco soluciones personalizadas para promover la recuperación y mejorar la calidad de vida."
        >
          Servicios de Kinesiología y rehabilitación
        </SectionPageTitle>
        <section className="border-b py-24">
          <div className="container">
            <ProjectList
              grid="md:grid-cols-2 lg:grid-cols-2 gap-12"
              limit={4}
              showPagination={true}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
