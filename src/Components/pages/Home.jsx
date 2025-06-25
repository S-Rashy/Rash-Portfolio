import About from "../About";
import Contact from "../Contact";
import Hero from "../Hero";
import Project from "../Project";
import Header from "../Static/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
