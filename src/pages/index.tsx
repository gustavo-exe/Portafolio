import { Cover } from "@/pages/portafolio/Cover/Cover";
import { NavBar } from "@/components/NavBar/NavBar";
import { About } from "./portafolio/About/About";
import { Actividades } from "./portafolio/Actividades/Actividades";
import { Footer } from "@/components/Footer/Footer";
import { IcanAndTools } from "./portafolio/ICanAndTools/IcanAndTools";


export default function Home() {
  return (
    <>
      <NavBar/>
      
      <Cover/>
      <About/>
      <Actividades/>
      <IcanAndTools/>

      <Footer/>
    </>
  )
}
