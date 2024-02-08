"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const SectionCTA = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.5,
        }}
      >
        <div className="container relative z-10 -mt-36">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-md bg-muted px-6 py-24 text-center shadow-lg dark:bg-slate-800 dark:shadow-slate-850/20">
              <h2 className="mb-8">¿Necesitas ayuda? Dejame un mensaje</h2>
              <Button size="lg">Yo me contactaré contigo!</Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SectionCTA;
