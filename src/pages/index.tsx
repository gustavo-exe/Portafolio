import { Cover } from "@/pages/portafolio/Cover/Cover";
import { NavBar } from "@/components/NavBar/NavBar";
import { About } from "./portafolio/About/About";


export default function Home() {
  return (
    <>
      <NavBar/>
      <Cover/>
      <About/>
    </>
  )
}
