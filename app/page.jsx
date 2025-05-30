import Image from "next/image";
import styles from "./page.module.css";
import StyleGuide from "@/components/StyleGuide";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Reservation from "@/components/Reservation";
import About from "@/components/About";

import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden">
      <Header />
      <Hero />
      <Menu />
      <Reservation />
      <About />
      <Contact />
      <Footer />
      {/* <StyleGuide /> */}
      {/* <div className="h-[4000px]"></div> */}
    </main>
  );
}
