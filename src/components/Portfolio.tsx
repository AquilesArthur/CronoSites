import { motion } from "motion/react";
import { ArrowUpRight, Maximize2, Sparkles } from "lucide-react";

const projects = [
  {
    category: "Escritórios & Advocacia",
    style: "Luxo & Autoridade",
    bgColor: "bg-zinc-900",
    textColor: "text-zinc-400",
    titleColor: "text-white",
    colSpan: "lg:col-span-2",
    accent: "bg-zinc-800",
    element: (
      <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 w-[75%] h-[70%] sm:w-[60%] sm:h-[80%] rounded-tl-[40px] bg-zinc-800/80 border-t border-l border-zinc-700/50 backdrop-blur-xl p-6 sm:p-8 flex flex-col gap-4 shadow-2xl skew-x-[-2deg] skew-y-[2deg] group-hover:skew-x-0 group-hover:skew-y-0 group-hover:-translate-x-0 sm:group-hover:translate-x-4 transition-all duration-700">
        <div className="w-8 sm:w-12 h-1 bg-zinc-600/50 rounded-full mb-2 sm:mb-4" />
        <div className="space-y-3">
          <div className="h-3 sm:h-4 w-3/4 bg-zinc-700/50 rounded-sm" />
          <div className="h-2 w-full bg-zinc-700/30 rounded-sm" />
          <div className="h-2 w-5/6 bg-zinc-700/30 rounded-sm" />
        </div>
        <div className="mt-auto self-end w-16 sm:w-24 h-6 sm:h-8 rounded-full border border-zinc-600/50" />
      </div>
    )
  },
  {
    category: "Clínicas & Saúde",
    style: "Clean & Confiança",
    bgColor: "bg-[#f2f7ff]",
    textColor: "text-blue-500",
    titleColor: "text-blue-950",
    colSpan: "lg:col-span-1",
    accent: "bg-white",
    element: (
      <div className="absolute -right-4 -bottom-4 w-[70%] h-[70%] rounded-2xl bg-white shadow-[0_20px_40px_rgba(0,0,0,0.05)] p-4 sm:p-6 group-hover:scale-105 transition-transform duration-700 flex flex-col gap-3 sm:gap-4 border border-blue-100/50">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-50/80 flex items-center justify-center text-blue-500 mb-1 sm:mb-2">
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
        </div>
        <div className="h-2 sm:h-3 w-1/2 bg-blue-100/50 rounded-full" />
        <div className="h-2 sm:h-3 w-2/3 bg-blue-50/50 rounded-full" />
      </div>
    )
  },
  {
    category: "Gastronomia",
    style: "Sabor & Sofisticação",
    bgColor: "bg-[#fff8f3]",
    textColor: "text-orange-600/60",
    titleColor: "text-orange-950",
    colSpan: "lg:col-span-1",
    accent: "bg-white",
    element: (
      <div className="absolute right-4 bottom-4 sm:right-8 sm:bottom-8 w-32 h-32 sm:w-40 sm:h-40 group-hover:scale-150 transition-all duration-700 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(254,215,170,0.5) 0%, rgba(254,215,170,0) 70%)' }} />
    )
  },
  {
    category: "Tecnologia & Startups",
    style: "Inovação & Fluxo",
    bgColor: "bg-[#0A0A0A]",
    textColor: "text-indigo-400",
    titleColor: "text-white",
    colSpan: "lg:col-span-2",
    accent: "bg-[#111]",
    element: (
      <div className="absolute right-0 bottom-0 w-[85%] h-[60%] sm:w-3/4 sm:h-3/4 overflow-hidden rounded-tl-2xl sm:rounded-tl-3xl border-t border-l border-white/5 bg-gradient-to-br from-indigo-500/10 to-transparent p-4 sm:p-8 flex gap-4 group-hover:-translate-y-2 transition-transform duration-700">
        {/* Mock dashboard panels */}
        <div className="flex-1 rounded-xl bg-white/5 border border-white/5 p-3 sm:p-4 flex flex-col gap-2 sm:gap-3">
          <div className="w-full h-16 sm:h-24 rounded-lg bg-gradient-to-t from-indigo-500/20 to-transparent border-b-2 border-indigo-500/50" />
          <div className="flex gap-2">
            <div className="h-6 sm:h-8 flex-1 rounded-md bg-white/5" />
            <div className="h-6 sm:h-8 flex-1 rounded-md bg-white/5" />
          </div>
        </div>
        <div className="w-1/4 sm:w-1/3 rounded-xl bg-white/5 border border-white/5 p-4" />
      </div>
    )
  }
];

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
              Projetamos de acordo com o nível e o sentimento da sua marca. Da sobriedade luxuosa exigida pelo direito à leveza translúcida da área da saúde.
            </motion.p>
          </div>
          <motion.a 
            href="#contact"
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
          {projects.map((project, idx) => (
            <motion.div
              key={project.category}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className={`${project.bgColor} ${project.colSpan} rounded-[1.5rem] md:rounded-[2rem] p-6 sm:p-8 md:p-12 min-h-[320px] md:min-h-[450px] flex flex-col justify-between group overflow-hidden relative border border-black/5 hover:border-black/10 transition-colors`}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
