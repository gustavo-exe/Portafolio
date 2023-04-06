
import { ProyectGallery } from "./Proyect/ProyectGallery/ProyectGallery";
import { ProyectHeader } from "./Proyect/ProyectHeader/ProyectHeader";

export const Proyects = () => {


    const listProyects = [
        {
            id: 0,
            header: {
                
                    nombre: 'Pokemon x AR',
                    logo: 'https://user-images.githubusercontent.com/61214852/118196015-8391ae00-b409-11eb-9cbc-a40b9bae3aa5.png',
                    descripcion: `
                        Es una pagina que cree con los diferentes tipos de realidad aumentada en AR.js con un plus de Model Viewer.
                        Logre obtener los conocimientos para realizar el proyecto en EDteam en el curso Realida aumentada en la web con AR.js.
                        Tengo pensado ir modificando o adaptando el sitio web, para explotar mejor los conocimientos.
                    `,
                    publictSite: 'https://gustavo-exe.github.io/ArJsPokemon/',
                    repositorio: 'https://github.com/gustavo-exe/ArJsPokemon',
                    tools: ['2', '4' , '11', '17']
                
            },
            gallery: [
                'https://raw.githubusercontent.com/gustavo-exe/Portafolio/c0ff4151bc7d4597166e944ba537205f37890d1f/imgs/MockupPokemon.jpg',
                'https://raw.githubusercontent.com/gustavo-exe/ArJsPokemon/master/assets/Portadas/ImageTracking.jpg'
            ]
        }
    ]


    return (
        <section className="container-layout mt-32" id="Proyects"  >

            <div  className="border-b  border-b-black t-h3" >
            Proyectos
            </div>

            <div  className="xl:pl-20 xl:pr-20  sm:pr-4 pl-4 pr-4 " >

                {
                    listProyects.map(proyect=>{
                        return(
                            <>
                                <ProyectHeader 
                                    key={proyect.id} 
                                    proyectHeader={proyect.header}  
                                />

                                <ProyectGallery
                                    key={proyect.id}
                                    gallery={proyect.gallery}
                                />
                            </>
                        )
                    })
                }
                
            </div>

            <div  className="border-b  border-b-black  mt-4" ></div>
        </section>
    )
}