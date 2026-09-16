import { motion } from "motion/react";
import { getWhatsAppLink } from "@/src/config/site";
import { NextDotFillButton } from "./NextDotFillButton";

export default function FinalCTA() {
  return (
    <section id="contact" className="py-32 md:py-48 bg-black relative z-10">
      <div className="container mx-auto px-6 max-w-7xl text-center flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-10"
        >
          Pronto para <br className="hidden md:block"/> dominar seu mercado?
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <NextDotFillButton label="Iniciar o projeto agora" href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" />
        </motion.div>
      </div>
    </section>
  );
}
