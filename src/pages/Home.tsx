import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import SocialProof from "../components/SocialProof";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Process from "../components/Process";
import Solutions from "../components/Solutions";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";

export default function Home() {
  return (
    <main>
      <Helmet>
        <title>CronoSites | Criação de Sites Profissionais e Landing Pages</title>
        <meta name="description" content="A CronoSites desenvolve landing pages e sites institucionais de alta conversão, com design moderno, alta performance e SEO otimizado para o seu negócio." />
        <meta property="og:title" content="CronoSites | Criação de Sites Profissionais" />
        <meta property="og:description" content="A CronoSites desenvolve landing pages e sites institucionais de alta conversão, com design moderno, alta performance e SEO otimizado." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Hero />
      <SocialProof />
      <Services />
      <Portfolio />
      <Process />
      <Solutions />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
