import { motion } from "motion/react";
import { ArrowUpRight, Maximize2 } from "lucide-react";
import { portfolioData } from "@/src/data/content";
import { getWhatsAppLink, siteConfig } from "@/src/config/site";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6 md:gap-8 text-center md:text-left">
          <div className="max-w-2xl mx-auto md:mx-0">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-semibold tracking-tight text-crono-dark mb-4 md:mb-6"
            >
              Nossas Estéticas.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-gray-500 font-light leading-relaxed"
            >
              Projetamos de acordo com o nível e o sentimento da sua marca. Da sobriedade luxuosa exigida pelo direito à leveza translúcida da área da saúde. Veja alguns exemplos do nosso trabalho.
            </motion.p>
          </div>
          <motion.a 
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center md:justify-start gap-2 text-sm font-medium hover:text-crono-accent transition-colors py-2"
          >
            Discutir seu projeto <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {portfolioData.map((project, idx) => (
            <motion.a
              href={project.link || siteConfig.links.portfolioExternal}
              target="_blank"
              rel="noopener noreferrer"
              key={project.category}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className={`${project.bgColor} ${project.colSpan} rounded-[1.5rem] md:rounded-[2rem] p-6 sm:p-8 md:p-12 min-h-[320px] md:min-h-[450px] flex flex-col justify-between group overflow-hidden relative border border-black/5 hover:border-black/10 transition-colors cursor-pointer block`}
            >
              <div className="relative z-20 flex justify-between items-start">
                <span className={`text-[11px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase ${project.textColor}`}>
                  {project.category}
                </span>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/5 backdrop-blur-md flex items-center justify-center md:opacity-0 group-hover:opacity-100 transform md:translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <Maximize2 className={`w-4 h-4 md:w-5 md:h-5 ${project.titleColor}`} />
                </div>
              </div>
              
              <div className="relative z-20 max-w-[85%] sm:max-w-[70%]">
                <h3 className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight ${project.titleColor} mb-2`}>
                  {project.style.split('&')[0]} <br className="hidden md:block"/>
                  <span className="opacity-60">& {project.style.split('&')[1]}</span>
                </h3>
              </div>
              
              {/* Specialized Abstract Element */}
              {project.element}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
