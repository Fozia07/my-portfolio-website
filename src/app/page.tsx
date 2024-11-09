import Image from "next/image";
import Header from "./header";
import Contactme from "./contact-me/page";
import About from "./about";
import Services from "./services";


export default function Home() {
  return (
    <main className="bg-[#f2e1d6] max-w-screen-2xl mx auto">
      <Header/>
      <About/>
      <Services/>
      <Contactme/>
    </main>
  )
}