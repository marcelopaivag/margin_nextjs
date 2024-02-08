"use client";
import { motion } from "framer-motion";
import IconBox from "@/components/icon-box";

export const iconBoxes = [
  {
    icon: "/icons/medical-research-6506_05214fe4-cb2e-4171-ac03-72168bf2981b.svg",
    title: "Ejercicio terapéutico",
    description:
      "Es la intervencion con mayor evidencia cientifica disponible para un kinesiólogo.",
  },
  {
    icon: "/icons/edit-document-4191_913956ad-aac3-4d29-b4ef-061756334d24.svg",
    title: "Terapia manual ortopédica",
    description:
      "La TMO es una especialidad de la kiensiología para el tratamiento de disfunciones de los nervios, huesos, tendones y ligamentos.",
  },
  {
    icon: "/icons/currency-2634_d41cd9f8-1db2-4236-b082-94568e599e40.svg",
    title: "Fisioterapia",
    description:
      "Para acelerar procesos de recuperación, aliviar el dolor y mejorar la funcionalidad en procesos de rehabilitación física o para mantener la salud.",
  },
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const SectionIconBoxes = ({ noTitle }: { noTitle?: boolean }) => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        {!noTitle && (
          <div className="flex justify-center">
            <div className="text-center lg:w-3/5">
              <h2 className="mb-12">
                Buscas recuperarte{" "}
                <span className="text-primary">de una lesión o dolor?...</span> conozco el camino.
              </h2>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-10">
          {iconBoxes.map((iconBox, index) => {
            return (
              <motion.div
                key={iconBox.title}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                }}
                custom={index}
              >
                <IconBox iconBox={iconBox} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionIconBoxes;
