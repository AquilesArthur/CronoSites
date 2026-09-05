import { motion } from "motion/react";

const benefits = [
  "Credibilidade",
  "Mais clientes",
  "Mais autoridade",
  "Mais vendas",
  "Presença no Google"
];

export default function SocialProof() {
  return (
    <section className="py-24 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-semibold tracking-widest text-gray-400 uppercase mb-12"
        >
          O padrão mínimo para grandes negócios
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-20">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-crono-accent/50" />
              <span className="text-xl md:text-2xl font-semibold text-gray-300 whitespace-nowrap hover:text-crono-dark transition-colors cursor-default">
                {benefit}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
