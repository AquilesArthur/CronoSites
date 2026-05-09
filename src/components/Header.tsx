import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/src/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
      <div className="absolute inset-0 glass border-b border-white/20"></div>
      <div className="container mx-auto px-6 h-16 md:h-20 flex items-center justify-between relative relative z-10 max-w-7xl">
        <a href="#" className="text-xl md:text-2xl font-bold tracking-tight text-crono-dark flex items-center gap-2">
          <div className="w-7 h-7 md:w-8 md:h-8 rounded-[0.4rem] md:rounded-lg bg-crono-dark text-crono-light flex items-center justify-center font-bold text-sm md:text-base">C</div>
          Crono
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#services" className="hover:text-crono-dark transition-colors">Serviços</a>
          <a href="#portfolio" className="hover:text-crono-dark transition-colors">Projetos</a>
          <a href="#process" className="hover:text-crono-dark transition-colors">Processo</a>
          <a href="#solutions" className="hover:text-crono-dark transition-colors">Soluções</a>
        </nav>

        <div className="hidden md:flex">
          <a href="#contact" className="px-5 py-2.5 rounded-full bg-crono-dark text-white text-sm font-medium hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,0,0,0.1)]">
            Orçamento
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden text-crono-dark p-2 -mr-2 active:scale-95 transition-transform" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-[64px] left-0 w-full h-[calc(100vh-64px)] glass border-b shadow-2xl md:hidden overflow-y-auto flex flex-col z-40 bg-white/95 backdrop-blur-xl"
          >
            <div className="flex flex-col p-6 gap-2 flex-grow">
              <a href="#services" onClick={() => setIsOpen(false)} className="text-xl font-medium text-crono-dark py-4 border-b border-gray-100 flex items-center justify-between group active:bg-gray-50 rounded-lg px-2 -mx-2 transition-colors">
                Serviços <ChevronRight className="w-5 h-5 text-gray-300 group-active:text-crono-dark group-active:translate-x-1 transition-all"/>
              </a>
              <a href="#portfolio" onClick={() => setIsOpen(false)} className="text-xl font-medium text-crono-dark py-4 border-b border-gray-100 flex items-center justify-between group active:bg-gray-50 rounded-lg px-2 -mx-2 transition-colors">
                Projetos <ChevronRight className="w-5 h-5 text-gray-300 group-active:text-crono-dark group-active:translate-x-1 transition-all"/>
              </a>
              <a href="#process" onClick={() => setIsOpen(false)} className="text-xl font-medium text-crono-dark py-4 border-b border-gray-100 flex items-center justify-between group active:bg-gray-50 rounded-lg px-2 -mx-2 transition-colors">
                Processo <ChevronRight className="w-5 h-5 text-gray-300 group-active:text-crono-dark group-active:translate-x-1 transition-all"/>
              </a>
              <a href="#solutions" onClick={() => setIsOpen(false)} className="text-xl font-medium text-crono-dark py-4 border-b border-gray-100 flex items-center justify-between group active:bg-gray-50 rounded-lg px-2 -mx-2 transition-colors">
                Soluções <ChevronRight className="w-5 h-5 text-gray-300 group-active:text-crono-dark group-active:translate-x-1 transition-all"/>
              </a>
              
              <div className="mt-8 pt-4 pb-12">
                <a href="#contact" onClick={() => setIsOpen(false)} className="w-full text-center px-5 py-4 rounded-full bg-crono-dark text-white text-[17px] font-medium block active:scale-[0.98] transition-transform">
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
