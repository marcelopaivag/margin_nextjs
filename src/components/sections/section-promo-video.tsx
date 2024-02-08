import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const SectionPromoVideo = () => {
  return (
    <section className="bg-muted py-16 dark:bg-slate-900 lg:py-28">
      <div className="container">
        <div className="flex flex-wrap justify-between lg:flex-nowrap lg:space-x-10">
          <div className="mb-10 w-full lg:w-[45%]">
            <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg">
              <iframe
                src="https://www.youtube.com/embed/gNAE8g2tytA?showinfo=0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="h-full w-full"
              ></iframe>
            </AspectRatio>
          </div>

          <div className="w-full lg:w-[45%]">
            <h2>
              Efectos positivos de la Tecarterapia
            </h2>
            <p className="mb-10 text-lg">
              La tecarterapia es un tratamiento no quirúrgico, seguro y no invasivo que se utiliza para el tratamiento de enfermedades de los huesos, articulaciones y tejidos blandos. 
              <br /> 
              Su aplicación produce relajación muscular, regeneración de tejidos, reducción del edema y alivio del dolor.
              </p>
            <Button size="lg">
              Get Started
              <ChevronRightIcon width={20} height={20} className="-mr-2 ml-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionPromoVideo;
