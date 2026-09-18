import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Carousel } from "./Carousel";
import { RandomizedText } from "./RandomizedText";

const portfolioItems = [
  {
    id: 1,
    title: "E-commerce de Luxo",
    desc: "Plataforma focada em alta conversão e estética premium, projetada para reter clientes e maximizar o LTV com velocidade extrema.",
    category: "Vendas Online",
    link: "https://exemplo1.com",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Plataforma SaaS",
    desc: "Arquitetura escalável para milhares de acessos, com dashboard analítico impecável e interface projetada para minimizar o churn.",
    category: "Tecnologia",
    link: "https://exemplo2.com",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Site Institucional",
    desc: "Posicionamento inquestionável para líderes de mercado. Uma vitrine digital que transmite autoridade e converte atenção em parcerias.",
    category: "Branding Premium",
    link: "https://exemplo3.com",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Experiência Imersiva",
    desc: "Apresentando um site que redefine a interação. Uma fusão perfeita de estética e usabilidade 3D.",
    category: "Corporate",
    link: "https://exemplo4.com",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Alta Conversão",
    desc: "E-commerce focado em velocidade e conversão absoluta. Cada pixel projetado para conduzir o usuário à compra.",
    category: "Performance",
    link: "https://exemplo5.com",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Lançamento Futuro",
    desc: "Um novo case de sucesso absoluto sendo desenhado em nossos laboratórios. Fique de olho nas próximas atualizações.",
    category: "Em Breve",
    link: "#",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
  }
];

export function ProjectButton({ text, href }: { text: string; href: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="group inline-flex items-center justify-center gap-2 bg-transparent py-2 text-black text-lg font-medium relative transition-colors duration-300"
    >
      <span className="relative z-10">{text}</span>
      
      {/* Animated Underline */}
      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-crono-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
      
      {/* Animated Arrow Icon */}
      <span className="relative grid w-[17px] h-[20px] place-items-center overflow-hidden">
        {/* Current Arrow (moves out) */}
        <ArrowRight 
          className="absolute -rotate-45 transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-[16px] group-hover:-translate-y-[12px] group-hover:text-crono-accent" 
          size={17} 
          strokeWidth={2.4} 
        />
        {/* Incoming Arrow (moves in) */}
        <ArrowRight 
          className="absolute -rotate-45 translate-x-[-16px] translate-y-[12px] transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-0 group-hover:translate-y-0 text-black group-hover:text-crono-accent" 
          size={17} 
          strokeWidth={2.4} 
        />
      </span>
    </a>
  );
}

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = portfolioItems[activeIndex];

  return (
    <section id="portfolio" className="w-full bg-[#f8f9fa] relative z-10 border-b border-black/5 overflow-hidden py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        
        {/* Main Section Title */}
        <div className="w-full text-center mb-10 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
            Projetos em <span className="text-crono-accent">destaque.</span>
          </h2>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center gap-6 xl:gap-0 w-full max-w-[1400px] mx-auto pt-4 md:pt-12">
          
          {/* Left Column: Interactive Carousel */}
          <div className="w-full xl:w-[55%] flex items-center justify-center relative min-h-[400px] md:min-h-[500px] xl:min-h-[700px] z-40 py-0">
            <Carousel 
              orbit={450}
              depth={150}
              corner={24}
              float={15}
              sink={50}
              settle={50}
              items={portfolioItems}
              onActiveChange={setActiveIndex}
            />
          </div>

          {/* Right Column: Dynamic Project Details */}
          <div className="w-full max-w-2xl xl:max-w-none xl:w-[45%] flex flex-col items-center text-center xl:items-start xl:text-left min-h-[300px] px-4 md:px-8 xl:pl-10 xl:pr-4 relative z-30">
            <div key={`content-${activeProject.id}`} className="flex flex-col items-center xl:items-start w-full bg-white/40 p-8 xl:p-10 rounded-3xl border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.02)] backdrop-blur-sm xl:mt-0">
              
              <div className="mb-4 xl:mb-6 min-h-[80px] xl:min-h-[110px] flex items-center justify-center xl:justify-start w-full">
                <RandomizedText 
                  split="words" 
                  delay={0.02}
                  className="text-4xl md:text-5xl font-bold tracking-tight text-black text-center xl:text-left font-heading"
                >
                  {activeProject.title}
                </RandomizedText>
              </div>

              <div className="w-full h-px bg-black/10 mb-6" />

              <span className="text-sm font-semibold tracking-widest uppercase text-crono-accent mb-4 block text-center xl:text-left w-full">
                <RandomizedText split="chars" delay={0.015} className="inline-block text-crono-accent">
                  {activeProject.category}
                </RandomizedText>
              </span>
              
              <div className="mb-8 min-h-[100px] flex items-start justify-center xl:justify-start w-full">
                <RandomizedText 
                  split="words" 
                  delay={0.01}
                  className="text-lg text-gray-600 font-light leading-relaxed text-center xl:text-left"
                >
                  {activeProject.desc}
                </RandomizedText>
              </div>
              
              <div className="mt-4 flex justify-center xl:justify-start w-full">
                <ProjectButton text="Explorar Projeto" href={activeProject.link} />
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
