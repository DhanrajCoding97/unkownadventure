import About from "./components/About";
import Services from "./components/Services";
import Hero from "./components/Hero";
import Team from "./components/team";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Team />
      <Services />
      <Contact />
    </main>
  )
}
