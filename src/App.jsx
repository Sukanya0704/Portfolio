import { useState } from "react";
import THEMES from "./themes/themes";

import Nav       from "./components/Nav";
import Hero      from "./components/Hero";
import Marquee   from "./components/Marquee";
import About     from "./components/About";
import Projects  from "./components/Projects";
import Skills    from "./components/Skills";
import Research  from "./components/Research";
import Contact   from "./components/Contact";
import Footer    from "./components/Footer";

import "./styles/global.css";

function App() {
  const [theme, setTheme] = useState("dark");

  // Inject CSS variables into :root from the active theme
  const cssVars = Object.entries(THEMES[theme].v)
    .map(([key, value]) => `${key}: ${value}`)
    .join("; ");

  return (
    <>
      <style>{`:root { ${cssVars} }`}</style>

      <Nav theme={theme} setTheme={setTheme} />
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Skills />
      <Research />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
