import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contacts";

const globalStyles = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    background: #0a0a14;
    color: #e2e8f0;
    font-family: 'DM Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: #0a0a14; }
  ::-webkit-scrollbar-thumb { background: rgba(56,189,248,0.3); border-radius: 3px; }
  section { width: 100%; }
`;

export default function App() {
  return (
    <>
      <style>{globalStyles}</style>
      <Header />
      <main>
        <Hero />
        <section id="about" style={{ display: "none" }} />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}