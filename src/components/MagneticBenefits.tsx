import { useState } from "react";
import { MagneticSelect } from "./MagneticSelect";
import { SlideUpText } from "./SlideUpText";
import { SparklesIcon, TargetIcon, ZapIcon, ShieldCheckIcon, MaximizeIcon, ClockIcon, GemIcon } from "./CustomIcons";
import AnimatedGradient from "./AnimatedGradient";

const items = [
  { id: 'center', title: "Benefícios", desc: "Explore como nossas plataformas transformam sua presença digital em uma verdadeira máquina de conversão e lucro.", icon: SparklesIcon },
  { id: '1', title: "Conversão", desc: "Engenharia comportamental aplicada. Transformamos visitantes casuais em clientes de alto valor de forma consistente.", icon: TargetIcon },
  { id: '2', title: "Velocidade", desc: "Otimização extrema de carregamento. Retenha a atenção antes que o usuário sequer pense em abandonar a página.", icon: ZapIcon },
  { id: '3', title: "Autoridade", desc: "Design de ponta que eleva instantaneamente o valor percebido da sua marca frente aos concorrentes.", icon: ShieldCheckIcon },
  { id: '4', title: "Escala", desc: "Arquitetura elástica. Seu site suporta milhares de acessos simultâneos sem perder performance.", icon: MaximizeIcon },
  { id: '5', title: "24/7", desc: "Seu maior vendedor operando ininterruptamente, sem feriados, pausas ou falhas técnicas.", icon: ClockIcon },
  { id: '6', title: "Premium", desc: "Estética refinada e interações imersivas para um posicionamento inquestionável no mercado líder.", icon: GemIcon },
];

const gradientConfig: any = {
  preset: "custom",
  color1: "#000000",
  color2: "#001a0a",
  color3: "#10B981",
  rotation: 45,
  speed: 10,
  swirl: 70,
};

export function MagneticBenefits() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = items[selectedIndex];

  return (
    <div id="benefits" className="relative w-full flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32 py-32 md:py-40 min-h-[600px] px-6 overflow-hidden bg-[#001105]">
      
      {/* Background Animated Gradient */}
      <AnimatedGradient 
        style={{ zIndex: 0 }} 
        config={gradientConfig} 
      />

      {/* Magnetic Cluster (Bencho) */}
      <div className="flex items-center justify-center relative z-10">
        <MagneticSelect 
          items={items}
          size="Large"
          pull={55}
          bounce={55}
          give={50}
          onChange={(index) => setSelectedIndex(index)}
        />
      </div>

      {/* Details Side Panel */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 max-w-sm px-4 relative z-10">
        <h3 className="h-12 overflow-hidden flex items-center justify-center lg:justify-start w-full">
          <SlideUpText key={`title-${selected.id}`} split="words" className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase">
            {selected.title}
          </SlideUpText>
        </h3>
        <div className="min-h-[120px] flex justify-center lg:justify-start w-full">
          <SlideUpText key={`desc-${selected.id}`} split="words" className="text-lg md:text-xl text-white/80 leading-relaxed font-light text-center lg:text-left">
            {selected.desc}
          </SlideUpText>
        </div>
        <p className="text-sm text-white/50 mt-2 font-medium animate-pulse text-center lg:text-left">
          * Clique nas outras esferas para descobrir mais.
        </p>
      </div>

    </div>
  );
}
