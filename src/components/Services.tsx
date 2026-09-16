import { motion } from "motion/react";
import { servicesData } from "@/src/data/content";

export default function Services() {
  return (
    <section id="services" className="w-full bg-white py-32 md:py-48 relative z-10 px-6 border-y border-black/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-black tracking-tight mb-6"
            >
              Nossa <span className="text-crono-accent">expertise.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 font-light leading-relaxed max-w-2xl"
            >
              Design focado, engenharia sólida e arquiteturas construídas para escalar. Atuamos nos pilares fundamentais do ecossistema digital para garantir liderança.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-10 bg-gray-50 border border-black/5 hover:border-crono-accent/30 hover:bg-gray-100 transition-all duration-500 rounded-2xl group"
            >
              <div className="mb-8 inline-flex p-4 bg-white rounded-xl border border-black/5 group-hover:border-crono-accent/20 transition-colors shadow-sm">
                <service.icon className="w-8 h-8 text-crono-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 tracking-tight">
                {service.title}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
