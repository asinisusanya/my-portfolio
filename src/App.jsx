import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import About from "./components/About";
import Research from "./components/Research";
import Projects from "./components/Projects";

import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Leadership from "./components/Leadership";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import BackgroundEffects from "./components/BackgroundEffects";

import Spotlight from "./components/Spotlight";
import ScrollProgress from "./components/ScrollProgress";
import Stats from "./components/Stats";
import ResearchHighlights from "./components/ResearchHighlights";
// import SEO from "./components/SEO";

import FadeIn from "./components/FadeIn";

function App() {
  return (
    <div className="bg-background text-text overflow-x-hidden">
      {/* <SEO /> */}

      <ScrollProgress />

      <Spotlight />

      <BackgroundEffects />

      <Navbar />

      <Hero />

      <Stats />

      <About />

      <ResearchHighlights />

      <FadeIn>
        <Education />
      </FadeIn>

      <FadeIn>
        <Research />
      </FadeIn>

      <FadeIn>
        <Projects />
      </FadeIn>

      <FadeIn>
        <Experience />
      </FadeIn>

      <FadeIn>
        <Skills />
      </FadeIn>

      <FadeIn>
        <Achievements />
      </FadeIn>

      <FadeIn>
        <Certifications />
      </FadeIn>

      <FadeIn>
        <Leadership />
      </FadeIn>

      <FadeIn>
        <Contact />
      </FadeIn>

      <Footer />
    </div>
  );
}

export default App;
