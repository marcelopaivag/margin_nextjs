import PromoTriangle from "@/components/promo-triangle";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const SectionPromo = () => {
  return (
    <section className="relative pb-28 pt-10 lg:pb-64 lg:pt-24">
      <PromoTriangle />
      <div className="container">
        <div className="lg:ml-auto lg:w-[45%]">
          <h2 className="max-w-md">
          Beneficios del ejercicio terapéutico para tu recuperación
          </h2>
          <p className="mb-10 text-lg">
            El ejercicio es un subconjunto de la actividad física y se define como la actividad estructurada
                        con el objetivo de mejorar el rendimiento físico y/o la salud. En las últimas dos décadas se ha
                        acumulado un conocimiento considerable sobre la importancia del ejercicio como tratamiento de
                        primera línea de varias enfermedades.
          </p>
          <ul class="mb-10 text-lg list-disc">
                        <li>Osteoartritis, osteoporosis, dolor de espalda, artritis reumatoide.</li>
                        <li>Lesiones deportivas como esguinces articulares, desgarros musculares y fracturas óseas.</li>
                        <li>Antes y después de operaciones como Latarjet, pinzamientos de cadera, meniscectomías u
                            injertos de LCA o prótesis articulares.</li>
                        <li>Depresión, ansiedad, estrés.</li>
                    </ul>

          

          <Button>
Agenda tu hora            <ChevronRightIcon width={20} height={20} className="-mr-2 ml-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SectionPromo;
