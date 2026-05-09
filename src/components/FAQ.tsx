import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Quanto tempo leva para o site ficar pronto?",
    answer: "A maioria dos projetos é entregue entre 7 a 15 dias úteis rápidos após a aprovação do design inicial, dependendo da complexidade do plano escolhido."
  },
  {
    question: "O site funciona bem celular?",
    answer: "Absolutamente. Desenvolvemos com mentalidade Mobile-First. Todos os nossos sites são perfeitamente responsivos, garantindo uma experiência impecável em celulares, tablets e desktops."
  },
  {
    question: "Vocês fazem manutenção contínua?",
    answer: "Sim, oferecemos planos de suporte e manutenção para garantir que seu site continue seguro, rápido e atualizado, além de permitirmos adições pontuais sob demanda."
  },
  {
    question: "Preciso fornecer os textos e imagens?",
    answer: "Trabalhamos colaborativamente. Se você já tem material, nós utilizamos e otimizamos. Se não tem, ajudamos com copywriting básico e bancos de imagens premium para garantir a qualidade visual."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-semibold tracking-tight text-crono-dark mb-4 md:mb-6"
          >
            Dúvidas frequentes.
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border-b border-gray-100 last:border-0"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full py-6 md:py-8 flex items-center justify-between text-left focus:outline-none group"
              >
                <span className={`text-base md:text-xl font-medium tracking-tight pr-6 md:pr-8 transition-colors ${openIndex === idx ? 'text-crono-accent' : 'text-crono-dark group-hover:text-gray-600'}`}>
                  {faq.question}
                </span>
                <span className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-200 flex items-center justify-center shrink-0 text-gray-500 group-hover:bg-gray-50 transition-colors">
                  {openIndex === idx ? <Minus className="w-4 h-4 md:w-5 md:h-5" /> : <Plus className="w-4 h-4 md:w-5 md:h-5" />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 md:pb-8 text-sm md:text-base text-gray-500 font-light leading-relaxed pr-8 md:pr-12">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
