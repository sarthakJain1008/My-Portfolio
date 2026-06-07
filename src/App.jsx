import React from "react";
import { Toaster } from "sonner";
import Navbar from "./components/portfolio/Navbar";
import Hero from "./components/portfolio/Hero";
import TechMarquee from "./components/portfolio/TechMarquee";
import About from "./components/portfolio/About";
import HowIWork from "./components/portfolio/HowIWork";
import Skills from "./components/portfolio/Skills";
import Projects from "./components/portfolio/Projects";
import Experience from "./components/portfolio/Experience";
import Proof from "./components/portfolio/Proof";
import Contact from "./components/portfolio/Contact";
import Footer from "./components/portfolio/Footer";

const Home = () => {
  return (
    <div style={{ position: "relative", background: "#FAFAF8", minHeight: "100vh" }}>
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <HowIWork />
        <Projects />
        <Skills />
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
        theme="light"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#FFFFFF",
            color: "#1A1A2E",
            border: "1px solid #E8E6E3",
            borderRadius: "12px",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
          },
        }}
      />
      <Home />
    </>
  );
}

export default App;
