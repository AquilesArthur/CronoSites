import { motion } from "motion/react";
import { ArrowRight, Star, Globe, Zap } from "lucide-react";

const solutions = [
  {
    name: "Landing Pages",
    tag: "Foco em Conversão",
    desc: "A solução perfeita para campanhas de anúncios, captação de leads e lançamentos de produtos.",
    icon: Zap,
    features: ["Copywriting persuasivo", "Alta taxa de conversão", "Carregamento instantâneo", "Testes A/B nativos"],
    popular: false,
  },
  {
    name: "Site Institucional",
    tag: "Autoridade Digital",
    desc: "A vitrine definitiva para a sua empresa. Transmita confiança e posicione sua marca no topo do seu mercado.",
    icon: Star,
    features: ["Múltiplas páginas", "Design exclusivo", "Painel administrativo", "SEO Otimizado", "Integrações customizadas"],
    popular: true,
  },
  {
    name: "Sistemas & Plataformas",
    tag: "Aplicações Robustas",
    desc: "Para modelos de negócios complexos, portais de conteúdo avançados ou arquiteturas personalizadas.",
    icon: Globe,
    features: ["Arquitetura escalável", "Banco de dados seguro", "Autenticação de usuários", "Dashboard de métricas", "Integrações via API"],
    popular: false,
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 md:py-32 bg-crono-bg">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-semibold tracking-tight text-crono-dark mb-6"
          >
            Soluções sob medida.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-gray-500 font-light leading-relaxed"
          >
            Não acreditamos em fórmulas prontas. Desenvolvemos o escopo e a tecnologia ideal para solucionar o problema atual da sua empresa.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {solutions.map((solution, idx) => (
            <motion.div
              key={solution.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative bg-white rounded-3xl p-6 md:p-10 border flex flex-col ${solution.popular ? 'border-crono-dark shadow-2xl scale-100 md:scale-105 z-10' : 'border-gray-100 shadow-sm'} transition-transform duration-300`}
            >
              {solution.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-crono-dark text-white text-[10px] md:text-xs font-semibold uppercase tracking-widest py-1.5 px-4 rounded-full whitespace-nowrap">
                  Escolha Principal
                </div>
              )}
              
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${solution.popular ? 'bg-crono-dark text-white' : 'bg-gray-50 text-crono-dark border border-gray-100'}`}>
                  <solution.icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-crono-accent uppercase tracking-wider block mb-1">{solution.tag}</span>
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-crono-dark">{solution.name}</h3>
                </div>
              </div>

              <p className="text-sm md:text-base text-gray-500 mb-8 flex-grow">{solution.desc}</p>

              <div className="space-y-4 mb-8">
                <h4 className="text-sm font-semibold tracking-wide text-crono-dark border-b border-gray-100 pb-2">Entregáveis</h4>
                <ul className="space-y-3">
                  {solution.features.map(feature => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-crono-accent/60 shrink-0" />
                      <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href="#contact" 
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-full font-medium transition-all duration-300 mt-auto active:scale-[0.98] ${solution.popular ? 'bg-crono-dark text-white hover:bg-black shadow-lg hover:shadow-xl hover:-translate-y-1' : 'bg-gray-50 text-crono-dark hover:bg-gray-100 border border-gray-100 hover:border-gray-200'}`}
              >
                Falar com especialista
                {solution.popular && <ArrowRight className="w-4 h-4 ml-1" />}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
