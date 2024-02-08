import CheckLineIcon from "remixicon-react/CheckLineIcon";

const SectionChecklist = () => {
  return (
    <section className="pb-28">
      <div className="container relative z-10 -mt-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-md bg-white px-6 py-16 text-center shadow-lg dark:bg-slate-800 dark:shadow-slate-850/20 sm:px-12">
            <h3 className="mb-6">
              Formación Académica
            </h3>
            <div className="flex flex-wrap text-left md:flex-nowrap md:space-x-10">
              <div className="w-full md:w-1/2">
                <div className="mb-1 flex">
                  <CheckLineIcon
                    size={20}
                    className="mr-1 mt-0.5 shrink-0 fill-green"
                  />
                  <span className="text-md text-foreground dark:text-slate-400">
                    Kinesiólogo, Magister en terapia manual ortopédica de la Universidad Andrés Bello.
                  </span>
                </div>
                <div className="mb-1 flex">
                  <CheckLineIcon
                    size={20}
                    className="mr-1 mt-0.5 shrink-0 fill-green"
                  />
                  <span className="text-md text-foreground dark:text-slate-400">
                    Osteópata D.O de Osteo Still Chile.
                  </span>
                </div>
                <div className="mb-1 flex">
                  <CheckLineIcon
                    size={20}
                    className="mr-1 mt-0.5 shrink-0 fill-green"
                  />
                  <span className="text-md text-foreground dark:text-slate-400">
                    Diplomado “Terapia Manual en el Manejo de los Tejidos Blandos” Universidad de Chile
                  </span>
                </div>


              </div>
              <div className="w-full md:w-1/2">
                <div className="mb-1 flex">
                  <CheckLineIcon
                    size={20}
                    className="mr-1 mt-0.5 shrink-0 fill-green"
                  />
                  <span className="text-md text-foreground dark:text-slate-400">
                    “Therapeutic Neuroscience Education: Educating Patients About Pain”.
                  </span>
                </div>
                <div className="mb-1 flex">
                  <CheckLineIcon
                    size={20}
                    className="mr-1 mt-0.5 shrink-0 fill-green"
                  />
                  <span className="text-md text-foreground dark:text-slate-400">
                    “Mulligan’s Manual Therapy Concept, Upper and Lower Quadrant”.
                  </span>
                </div>
                <div className="mb-1 flex">
                  <CheckLineIcon
                    size={20}
                    className="mr-1 mt-0.5 shrink-0 fill-green"
                  />
                  <span className="text-md text-foreground dark:text-slate-400">
                    Sahrmann Concept “Diagnosis and Treatment of Movement System Impairment (MSI) Syndromes for Lumbar Spine and Shoulder”.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionChecklist;
