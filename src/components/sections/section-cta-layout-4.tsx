import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const SectionCTALayout4 = () => {
  return (
    <section className="bg-muted px-6 py-24 dark:bg-slate-900">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="mb-8">
              Juntos podemos lograr tu recuperación, estoy aquí para ayudarte.
            </h2>
            <Button size="lg">
            Reservar una cita
              <ChevronRightIcon width={20} height={20} className="-mr-2 ml-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCTALayout4;
