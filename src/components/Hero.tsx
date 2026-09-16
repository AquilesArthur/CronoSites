import { getWhatsAppLink } from "@/src/config/site";
import { NextDotFillButton } from "./NextDotFillButton";
import { BlurReveal } from "./BlurReveal";
import { Rays } from "./Rays";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center items-center bg-black overflow-hidden pt-20">
      <Rays backgroundColor="#000" style={{ zIndex: 0 }} />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">
        <BlurReveal delay={0.2} className="mb-10">
          <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-bold text-white tracking-tight leading-[1.1]">
            Plataformas digitais <br /> à frente do seu tempo.
          </h1>
        </BlurReveal>

        <BlurReveal delay={0.4}>
          <NextDotFillButton label="Solicitar Orçamento" href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" />
        </BlurReveal>
      </div>
    </section>
  );
}
