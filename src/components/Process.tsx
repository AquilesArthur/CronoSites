import { motion } from "motion/react";

const steps = [
  { num: "01", title: "Contato inicial", desc: "Entendemos sua visão, metas e referências de mercado." },
  { num: "02", title: "Planejamento", desc: "Estruturação da arquitetura de informação e estratégia de conversão." },
  { num: "03", title: "Design", desc: "Criamos a interface visual em alta fidelidade e identidade premium." },
  { num: "04", title: "Desenvolvimento", desc: "Código limpo, performance otimizada e animações fluidas." },
  { num: "05", title: "Entrega", desc: "Revisão meticulosa, testes em múltiplos dispositivos e publicação." },
  { num: "06", title: "Suporte", desc: "Monitoramento contínuo e atualizações para garantir estabilidade." },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-crono-dark text-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none translate-x-1/3 -translate-y-1/3" style={{ background: 'radial-gradient(circle, rgba(79,107,255,0.1) 0%, rgba(79,107,255,0) 70%)' }} />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 md:mb-6"
          >
            Método implacável.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-gray-400 font-light max-w-2xl leading-relaxed"
          >
            Sem surpresas. Do primeiro contato ao site no ar, nosso processo é transparente, previsível e focado na mais alta qualidade de entrega.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-y-16 gap-x-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative pl-8 md:pl-0 border-l-2 md:border-l-0 border-white/10 md:border-t pt-2 md:pt-8 group"
            >
              {/* Permanent dot on mobile, animated line on desktop */}
              <div className="absolute left-[-5px] top-4 w-2 h-2 rounded-full bg-crono-accent md:hidden" />
              <div className="absolute top-[-2px] left-0 right-0 h-[2px] bg-crono-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 hidden md:block" />

              <span className="text-2xl md:text-3xl font-light text-white/40 block mb-4 md:mb-6 font-mono tracking-tighter group-hover:text-crono-accent/50 transition-colors duration-300">
                {step.num}
              </span>
              <h3 className="text-xl font-semibold mb-2 md:mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
