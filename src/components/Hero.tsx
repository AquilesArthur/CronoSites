import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Premium Animated Background */}
      <div className="absolute inset-0 bg-crono-bg flex items-center justify-center pointer-events-none">
        <div className="absolute w-[400px] md:w-[800px] h-[400px] md:h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)' }}></div>
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[400px] md:w-[600px] h-[400px] md:h-[600px] top-0 left-[-10%] will-change-transform"
          style={{ background: 'radial-gradient(circle, rgba(79,107,255,0.15) 0%, rgba(79,107,255,0) 70%)' }}
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute w-[400px] md:w-[800px] h-[400px] md:h-[800px] bottom-[-10%] right-[-10%] will-change-transform"
          style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.15) 0%, rgba(96,165,250,0) 70%)' }}
        />
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-5xl text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-black/5 bg-white/50 backdrop-blur-md mb-6 md:mb-8 shadow-sm"
        >
          <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-crono-accent" />
          <span className="text-xs md:text-sm font-medium tracking-tight text-gray-700">Design de alta performance</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-[2.5rem] leading-[1.1] sm:text-5xl md:text-7xl lg:text-[80px] font-semibold tracking-[-0.03em] md:leading-[1.05] text-crono-dark mb-6 md:mb-8"
        >
          Sites profissionais para empresas que <br className="hidden md:block"/> <span className="text-gradient">querem crescer.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-gray-500 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed font-light px-2 sm:px-4 md:px-0"
        >
          Criamos sites modernos, rápidos e estratégicos para negócios locais que buscam autoridade e conversão imediata.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 px-2 sm:px-0"
        >
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-crono-dark text-white font-medium hover:bg-black transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group shadow-[0_10px_30px_rgba(0,0,0,0.15)] text-[15px] md:text-base">
            Solicitar orçamento
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#portfolio" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/80 backdrop-blur-md text-crono-dark font-medium border border-gray-200/60 hover:bg-white hover:border-gray-300 transition-all hover:scale-105 active:scale-95 flex items-center justify-center shadow-sm text-[15px] md:text-base">
            Ver projetos
          </a>
        </motion.div>
      </div>

      {/* Floating UI Decorative Elements (Desktop Only) */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="hidden lg:flex absolute top-[30%] left-10 xl:left-20 glass p-4 rounded-2xl shadow-xl flex-col gap-3 w-48 hover:-translate-y-2 transition-transform duration-500 cursor-default"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center relative">
             <div className="w-3 h-3 rounded-full bg-green-500 absolute"></div>
             <div className="w-3 h-3 rounded-full bg-green-500 absolute animate-ping opacity-50"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 font-medium">Status</span>
            <span className="text-sm font-semibold text-gray-800">Online & Rápido</span>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="hidden lg:flex absolute bottom-[25%] right-10 xl:right-20 glass p-4 rounded-2xl shadow-xl flex-col gap-3 w-56 hover:-translate-y-2 transition-transform duration-500 cursor-default"
      >
        <div className="flex items-center gap-4">
           <div className="w-12 h-12 rounded-xl bg-crono-accent/10 flex items-center justify-center text-crono-accent font-bold text-lg border border-crono-accent/20">A+</div>
           <div className="flex flex-col">
             <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Performance</span>
             <span className="text-sm font-bold text-crono-dark">Score 100/100</span>
           </div>
        </div>
      </motion.div>
    </section>
  );
}
