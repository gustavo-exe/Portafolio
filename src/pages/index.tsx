import { Footer } from "@/components/Footer/Footer";
import { NavBar } from "@/components/NavBar/NavBar";
import { About } from "@/sections/portafolio/About/About";
import { Actividades } from "@/sections/portafolio/Actividades/Actividades";
import { Contact } from "@/sections/portafolio/Contact/Contact";
import { Cover } from "@/sections/portafolio/Cover/Cover";
import { IcanAndTools } from "@/sections/portafolio/ICanAndTools/IcanAndTools";
import { Proyects } from "@/sections/portafolio/Proyects/Proyects";



export default function Home() {
  return (
    <div>
      <NavBar/>
      
      <Cover/>
      <About/>
      <Actividades/>
      <IcanAndTools/>
      <Proyects/>
      <Contact/>

      <Footer/>
    </div>
  )
}
