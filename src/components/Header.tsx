import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { getWhatsAppLink } from "@/src/config/site";
import { NextDotFillButton } from "./NextDotFillButton";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="w-full max-w-4xl bg-black/40 backdrop-blur-xl border border-white/10 rounded-full h-16 flex items-center justify-between px-6 pointer-events-auto shadow-2xl">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-xl font-bold tracking-tight text-white uppercase font-sans">
          CRONO.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
          <button onClick={() => scrollTo('services')} className="hover:text-crono-accent transition-colors">Serviços</button>
          <button onClick={() => scrollTo('portfolio')} className="hover:text-crono-accent transition-colors">Projetos</button>
          <button onClick={() => scrollTo('process')} className="hover:text-crono-accent transition-colors">Processo</button>
        </nav>

        <div className="hidden md:flex">
          <NextDotFillButton label="Orçamento" href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="!h-10 !min-w-[120px] !text-xs !px-6" />
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden z-[60] flex items-center pr-2">
          <label className="burger" htmlFor="burger">
            <input type="checkbox" id="burger" checked={isOpen} onChange={() => setIsOpen(!isOpen)} />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[72px] left-4 right-4 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-3xl flex flex-col z-40 pointer-events-auto overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col flex-grow p-4">
              <button onClick={() => scrollTo('services')} className="text-lg font-medium text-white py-4 border-b border-white/10 px-4 text-left hover:text-crono-accent transition-colors">
                Serviços
              </button>
              <button onClick={() => scrollTo('portfolio')} className="text-lg font-medium text-white py-4 border-b border-white/10 px-4 text-left hover:text-crono-accent transition-colors">
                Projetos
              </button>
              <button onClick={() => scrollTo('process')} className="text-lg font-medium text-white py-4 border-b border-white/10 px-4 text-left hover:text-crono-accent transition-colors">
                Processo
              </button>
              
              <div className="p-4 mt-2 text-center">
                <NextDotFillButton label="Solicitar Orçamento" href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="w-full" onClick={() => setIsOpen(false)} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
