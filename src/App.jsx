import React from "react";
import { Toaster } from "sonner";
import Navbar from "./components/portfolio/Navbar";
import Hero from "./components/portfolio/Hero";
import TechMarquee from "./components/portfolio/TechMarquee";
import About from "./components/portfolio/About";
import Skills from "./components/portfolio/Skills";
import Projects from "./components/portfolio/Projects";
import Experience from "./components/portfolio/Experience";
import Proof from "./components/portfolio/Proof";
import Contact from "./components/portfolio/Contact";
import Footer from "./components/portfolio/Footer";

const Home = () => {
  return (
    <div style={{ position: "relative", background: "#050505", minHeight: "100vh" }}>
      <div className="noise-overlay" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Proof />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <>
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#0A0A0C",
            color: "#FAFAFA",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 0,
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "13px",
          },
        }}
      />
      <Home />
    </>
  );
}

export default App;
