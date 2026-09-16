import { motion } from "motion/react";

const steps = [
  { num: "01", title: "Discovery", desc: "Entendemos sua visão, metas e referências de mercado." },
  { num: "02", title: "Strategy", desc: "Estruturação da arquitetura de informação e estratégia de conversão." },
  { num: "03", title: "Design", desc: "Criamos a interface visual em alta fidelidade com foco na experiência." },
  { num: "04", title: "Build", desc: "Código limpo, performance otimizada e engenharia de ponta." },
  { num: "05", title: "Launch", desc: "Revisão meticulosa, testes rigorosos e publicação." },
  { num: "06", title: "Scale", desc: "Monitoramento contínuo e atualizações baseadas em dados reais." },
];

export default function Process() {
  return (
    <section id="process" className="w-full bg-[#030303] py-32 md:py-48 relative z-10 px-6 border-y border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6"
            >
              Nosso <span className="text-crono-accent">processo.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-400 font-light leading-relaxed max-w-2xl"
            >
              Metodologia de ponta. Cada etapa é desenhada para entregar o máximo de valor, precisão técnica e resultados escaláveis.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-10 bg-[#080808] border border-white/5 rounded-2xl group"
            >
              <span className="text-3xl font-bold text-crono-accent/50 block mb-8 font-sans">
                {step.num}
              </span>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                {step.title}
              </h3>
              <p className="text-gray-400 font-light leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
