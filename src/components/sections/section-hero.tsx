import HeroTriangle from "@/components/hero-triangle";


const SectionHero = () => {
  return (
    <div className="relative overflow-hidden">
      <HeroTriangle />
      <section className="pb-16 pt-32 md:pt-40 lg:pb-40 lg:pt-60">
        <div className="container max-w-6xl">
          <div className="flex">
            <div className="lg:w-[45%]">
              <h1 className="text-headings max-w-xs text-3xl lg:text-4xl">
                Rehabilitación que Genera Resultados.
              </h1>
              <p className="mb-12 text-lg">
                Con ejercicio terapéutico, educación y fisioterapia soy el encargado de asistrir una recuperación basada en tí.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionHero;
