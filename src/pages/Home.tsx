import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Process from "../components/Process";
import FinalCTA from "../components/FinalCTA";
import { MagneticBenefits } from "../components/MagneticBenefits";
import { HighlightedText } from "../components/HighlightedText";

const staggerItem = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 250, damping: 25 } }
};

const renderWords = (text: string) => {
  return text.split(" ").filter(w => w !== "").map((word, i) => (
    <motion.span key={word + i} variants={staggerItem} className="mr-[0.25em] inline-block">
      {word}
    </motion.span>
  ));
};

export default function Home() {
  return (
    <main className="bg-crono-bg overflow-hidden w-full">
      <Helmet>
        <title>Crono | Digital Craft</title>
        <meta name="description" content="Nós projetamos e desenvolvemos plataformas brutais e altamente performáticas para quem busca liderança." />
      </Helmet>
      <Hero />
      
      {/* SEÇÃO 2: Introdução direta */}
      <section className="w-full flex items-center justify-center px-6 py-32 md:py-48 bg-black relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.08 }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-5xl font-medium tracking-tight text-white/90 leading-tight justify-center items-center text-center flex flex-wrap max-w-4xl"
          >
            {renderWords("Convertemos ")}
            <motion.span variants={staggerItem} className="mr-[0.25em] inline-block">
              <HighlightedText delay={0.5}>atenção</HighlightedText>
            </motion.span>
            {renderWords("em receita previsível através de ")}
            <motion.span variants={staggerItem} className="mr-[0.25em] inline-block">
              <HighlightedText delay={1.0}>design premium</HighlightedText>
            </motion.span>
            {renderWords("e engenharia impecável.")}
          </motion.div>
        </div>
      </section>

      <Portfolio />
      
      {/* SEÇÃO BENEFÍCIOS: Interativa (Magnetic Cluster) */}
      <MagneticBenefits />
      
      <Services />
      <Process />
      <FinalCTA />
    </main>
  );
}
