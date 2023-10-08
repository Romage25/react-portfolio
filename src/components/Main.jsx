import Home from "./Home.jsx";
import About from "./About.jsx";
import Resume from "./Resume.jsx";
import Hobbies from "./Hobbies.jsx";
import Contact from "./Contact";

export default function Main() {
  return (
    <main>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="hobbies">
        <Hobbies />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
