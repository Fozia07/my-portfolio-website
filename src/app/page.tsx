
import Header from "./component/header";
import Contactme from "./contact-me/page";
import About from "./component/about";
import Services from "./component/services";


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