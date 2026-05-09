/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Solutions from "./components/Solutions";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-crono-bg min-h-screen text-crono-text font-sans antialiased selection:bg-crono-accent/20 selection:text-crono-dark">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <Portfolio />
        <Process />
        <Solutions />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
