import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CvSection from "./components/CvSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [showTop, setShowTop] = useState(false);

  // Affiche le bouton "retour en haut" quand on a défilé de plus de 550px.
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 550);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-orb orb-3"></div>
      <div className="grid-overlay"></div>

      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CvSection />
        <Contact />
      </main>
      <Footer />

      <button className={`back-to-top glass ${showTop ? "show" : ""}`} aria-label="Retour en haut"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>↑</button>
    </>
  );
}
