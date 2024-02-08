"use client";

import TestimonialsSlider from "@/components/testimonials-slider";
import { Navigation } from "swiper/modules";
import SectionTitle from "./section-title";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export const testimonials = [
  {
    name: "Angelica Salas",
    company: "",
    comment:
      "“Marcelo Paiva es un profesional altamente calificado. Lo conozco desde hace 10 años y siempre está actualizando sus conocimientos para prestar una atención de primer nivel y con resultados exitosos.”",
    image: "/testimonials/1.png",
    rating: 5,
  },
  {
    name: "Pablo Arriagada",
    company: "",
    comment:
      "“Muy buena atención, destaco la preocupación en todo momento con el paciente por parte de los profesionales y las instalaciones de alta calidad.”",
    image: "/testimonials/2.png",
    rating: 5,
  },
  {
    name: "Hans Hoffstetter",
    company: "",
    comment:
      "Excelente profesional , demuestra gran conocimiento en el área , amable y preocupado por sus pacientes.”",
    image: "/testimonials/1.png",
    rating: 5,
  },
  {
    name: "Hudson Oliveira da Silva",
    company: "",
    comment:
      "“Marcelo es un excelente profesional y me viene ayudando mucho con mis lesiones lumbares. Siempre al día con distintas técnicas y con un seguimiento impresionante. Recomiendo sin dudas su trabajo.”",
    image: "/testimonials/2.png",
    rating: 5,
  },
];

const SectionTestimonialsSlider = () => {
  return (
    <section className="bg-secondary py-24">
      <div className="container max-w-6xl">
        <SectionTitle
          subtitle="Los que ya se recuperaron con nosotros"
          sectionClasses="mb-12"
          titleClasses="mb-3 text-white"
          subtitleClasses="text-md font-medium text-white"
        >
          Clientes Satisfechos
        </SectionTitle>
        <TestimonialsSlider
          testimonials={testimonials}
          swiperParams={{
            breakpoints: {
              768: {
                slidesPerView: 2,
              },
              1025: {
                slidesPerView: 2,
              },
            },
            spaceBetween: 40,
            modules: [Navigation],
          }}
        />
      </div>
    </section>
  );
};

export default SectionTestimonialsSlider;
