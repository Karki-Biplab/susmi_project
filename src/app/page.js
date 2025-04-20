import Image from "next/image";
import Hero from "./component/Hero";
import Contact from "./component/Contact";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import Experience from "./component/Experience";
import Intro from "./component/Intro";

export default function Home() {
  return (
 <div> 
  <Hero/>
  <Intro/>
  <Skills/>
  <Experience/>
  <Projects/>
  <Contact/>
  </div>
  );
}
