import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Projects from "./components/Projects.jsx";
import Team from "./components/Team.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <main className="app-shell">
      <Header />

      <section id="home" className="hero-shell">
        <Hero />
      </section>

      <Services />
      <Projects />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}