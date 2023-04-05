import { ProyectFooter } from "./Proyect/ProyectFooter/ProyectFooter";
import { ProyectGallery } from "./Proyect/ProyectGallery/ProyectGallery";
import { ProyectHeader } from "./Proyect/ProyectHeader/ProyectHeader";

export const Proyects = () => {
    return (
        <section className="container-layout mt-32" id="Proyects"  >

            <div  className="border-b  border-b-black t-h3" >
            Proyectos
            </div>

            <div  className="xl:pl-20 xl:pr-20  sm:pr-4 pl-4 pr-4 " >
                <ProyectHeader/>
                <ProyectGallery/>
                
            </div>

            <div  className="border-b  border-b-black  mt-4" ></div>
        </section>
    )
}