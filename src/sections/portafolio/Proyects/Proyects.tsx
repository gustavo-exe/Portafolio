
import { ProyectGallery } from "./Proyect/ProyectGallery/ProyectGallery";
import { ProyectHeader } from "./Proyect/ProyectHeader/ProyectHeader";
import style from "./Proyects.module.scss";
import  Carousel  from "../../../components/Carousel/Carousel";

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
        },
        {
            id: 1,
            header: {
                
                    nombre: 'LoginApp - ToDo List',
                    logo: '/proyects/todo-icon.svg',
                    descripcion: `
                        Dos en uno, un login simple sin necesidad de un registro previo se accede al ToDo List con almacenamiento de las tareas.
                    `,
                    publictSite: 'https://loginapp-177ba.web.app/',
                    repositorio: 'https://github.com/gustavo-exe/LoginApp',
                    tools: ['1', '18']
                
            },
            gallery: [
                'https://raw.githubusercontent.com/gustavo-exe/LoginApp/master/src/images/Mockup.jpg'
            ]
        },
        {
            id: 2,
            header: {
                
                    nombre: 'Doberkey',
                    logo: '/proyects/doberkey-logo.svg',
                    descripcion: `
                    Esta es una APP que fue creada con React Native, llamada  Doberkey (el nombre se deribo de una rasa de un perro y la palabra llave en ingles) la app ayuda a mantener un inventario de claves ordenado, simplemente agregando datos como password y demas dettales del sitio al que pertenece.
                    `,
                    publictSite: '',
                    repositorio: 'https://github.com/gustavo-exe/Doberkey',
                    tools: ['1', '4']
                
            },
            gallery: [
                'https://user-images.githubusercontent.com/61214852/102045057-bde51980-3d9d-11eb-9b13-941a756732c2.jpg',
                'https://user-images.githubusercontent.com/61214852/102173999-08c86500-3e62-11eb-9111-572684efdbde.jpg'
            ]
        }
    ]


    return (
        <section className="container-layout mt-32" id="Proyects"  >

            <div  className="border-b  border-b-black t-h3 pl-4 pr-4" >
            Proyectos
            </div>

            <div  className="xl:pl-20 xl:pr-20  sm:pr-4 pl-4 pr-4 " >

                <Carousel>

                {/* <section  className="flex overflow-hidden relative" > */}
                    
                    {
                        listProyects.map(proyect=>{
                            return(
                                <div  key={proyect.id} className={style.theWidth + ' p-1'} >
                                    <ProyectHeader 
                                        key={proyect.id} 
                                        proyectHeader={proyect.header}  
                                    />

                                    <ProyectGallery
                                        key={proyect.id}
                                        gallery={proyect.gallery}
                                    />
                                </div>
                            )
                        })
                    }
                {/* </section> */}
                </Carousel>
                
            </div>

            <div  className="border-b  border-b-black  mt-4" ></div>
        </section>
    )
}