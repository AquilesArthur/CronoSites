import { motion } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-crono-bg relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-crono-dark rounded-[2.5rem] p-8 sm:p-12 md:p-20 text-center relative overflow-hidden"
        >
          {/* Animated Background Gradients in CTA */}
          <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none -translate-y-1/2 translate-x-1/3" style={{ background: 'radial-gradient(circle, rgba(79,107,255,0.2) 0%, rgba(79,107,255,0) 70%)' }} />
          <div className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none translate-y-1/2 -translate-x-1/3" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(59,130,246,0) 70%)' }} />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight"
            >
              Seu negócio merece um site <br className="hidden md:block"/><span className="text-gray-400">profissional.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-gray-400 font-light max-w-xl mx-auto mb-10"
            >
              Entre em contato e leve a presença digital da sua empresa para o próximo nível. Não deixe dinheiro na mesa com um site amador.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="px-2 sm:px-0"
            >
              <a 
                href="#"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-crono-dark font-medium hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 text-base sm:text-lg shadow-[0_0_40px_rgba(255,255,255,0.2)]"
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
