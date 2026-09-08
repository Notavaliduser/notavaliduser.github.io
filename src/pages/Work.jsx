import heroImg from "../assets/rachna-photo.jpg";
import About from "../components/About";
import CaseStudies from "../components/CaseStudies";
import Timeline from "../components/Timeline";
import Contact from "../components/Contact";

export default function Work() {
  return (
    <main>
      <section className="hero">
        <div className="hero-identity">
          <div className="hero-photo">
            <img src={heroImg} alt="Rachna Ravi" />
          </div>
          <div className="hero-intro">
            <h1 className="hero-name">Rachna Ravi</h1>
            <p className="hero-tagline">
              Professional problem finder. Photographer. Maker of things.
            </p>
          </div>
        </div>
        <blockquote className="hero-philosophy">
          I find the problem everyone walked past — dig into what people
          actually do, not what they say — then ship small, fast experiments to
          prove it. Rigour and speed aren't tradeoffs; they're how you avoid
          building the wrong thing really well.
        </blockquote>
      </section>
      <About />
      <CaseStudies />
      <Timeline />
      <Contact />
    </main>
  );
}
