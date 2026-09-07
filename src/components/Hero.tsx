import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "@/src/config/site";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 bg-white">
      {/* Geometric Tech Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        {/* Tech Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Animated Geometric Particles Canvas (Random sizes, collisions, different movements) */}
        <ParticleBackground />
        
        {/* Soft Fades for Content Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[3rem] leading-[1.05] sm:text-6xl md:text-[5rem] lg:text-[5.5rem] font-bold tracking-tighter text-crono-dark mb-6"
        >
          O próximo passo da <br className="hidden md:block"/> sua presença digital
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto font-medium tracking-tight px-2 sm:px-4 md:px-0"
        >
          Construímos plataformas modernas, ultrarrápidas e projetadas para marcas que buscam liderar o seu mercado.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 px-2 sm:px-0"
        >
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-full bg-crono-dark text-white font-medium hover:bg-black transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group text-[15px] md:text-base">
            Iniciar projeto
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <button onClick={() => {
            document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
          }} className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent text-crono-dark font-medium border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all hover:scale-105 active:scale-95 flex items-center justify-center text-[15px] md:text-base">
            Ver portfólio
          </button>
        </motion.div>
      </div>
    </section>
  );
}
