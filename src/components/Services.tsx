import { motion } from "motion/react";
import { LayoutTemplate, MonitorSmartphone, Zap, MapPin, Wrench, Globe } from "lucide-react";

const services = [
  {
    title: "Landing Pages",
    description: "Páginas modernas focadas em conversão absoluta para suas campanhas.",
    icon: LayoutTemplate,
  },
  {
    title: "Sites Institucionais",
    description: "Plataformas profissionais que transmitem a verdadeira escala da sua empresa.",
    icon: Globe,
  },
  {
    title: "Design Responsivo",
    description: "Ajuste perfeito e experiência hiper-fluida em qualquer celular ou desktop.",
    icon: MonitorSmartphone,
  },
  {
    title: "Performance Premium",
    description: "Arquitetura otimizada para carregar na velocidade que seus clientes exigem.",
    icon: Zap,
  },
  {
    title: "SEO Local",
    description: "Otimização técnica para dominar as buscas na sua região.",
    icon: MapPin,
  },
  {
    title: "Suporte e Manutenção",
    description: "Acompanhamento contínuo para garantir que seu site nunca pare.",
    icon: Wrench,
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-crono-bg relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 md:mb-20 max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-semibold tracking-tight text-crono-dark mb-4 md:mb-6"
          >
            Digital de excelência.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-gray-500 font-light leading-relaxed"
          >
            Cada detalhe importa. Combinamos design refinado, performance técnica e foco em resultados para construir mais do que sites: construímos negócios.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-crono-dark" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-crono-dark mb-3">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-gray-500 font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
