import { 
  LayoutTemplate, 
  MonitorSmartphone, 
  Zap, 
  MapPin, 
  Wrench, 
  Globe,
  Star,
  Sparkles
} from "lucide-react";

export const servicesData = [
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

export const solutionsData = [
  {
    name: "Site Institucional",
    tag: "Autoridade Digital",
    desc: "A vitrine definitiva para a sua empresa. Transmita confiança e posicione sua marca no topo do seu mercado.",
    icon: Star,
    features: ["Múltiplas páginas", "Design exclusivo", "Painel administrativo", "SEO Otimizado", "Integrações customizadas"],
    popular: false,
  },
  {
    name: "Landing Pages",
    tag: "Foco em Conversão",
    desc: "A solução perfeita para campanhas de anúncios, captação de leads e lançamentos de produtos.",
    icon: Zap,
    features: ["Copywriting persuasivo", "Alta taxa de conversão", "Carregamento instantâneo", "Testes A/B nativos"],
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

export const faqData = [
  {
    question: "Quanto tempo leva para o site ficar pronto?",
    answer: "A maioria dos projetos é entregue entre 3 a 5 dias úteis após a aprovação do design inicial, dependendo da complexidade do plano escolhido."
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

export const portfolioData = [
  {
    category: "Escritórios & Advocacia",
    link: "https://aquilesadvocacia.com/",
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
    category: "Alimentos",
    link: "https://aquilesarthur.github.io/Brasa-e-Massa/",
    style: "Sabor & Sofisticação",
    bgColor: "bg-orange-950 overflow-hidden group",
    textColor: "text-orange-100",
    titleColor: "text-white",
    colSpan: "lg:col-span-1",
    accent: "bg-white",
    element: (
      <>
        {/* Background Image Container */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 group-hover:scale-110 opacity-70"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1200')" }}
        />
        {/* Gradient Overlay to ensure text readability (dark bottom/left, transparent top/right) */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      </>
    )
  }
];
