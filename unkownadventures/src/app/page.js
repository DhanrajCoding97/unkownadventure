import About from "./components/About";
import Services from "./components/Services";
import Hero from "./components/Hero";
import Team from "./components/team";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";

export default function Home() {
 
  return (
    <main>
      <Hero/>
      <About/>
      <Team />
      <Services />
      <Testimonial/>
      <Contact />
    </main>
  )
}
