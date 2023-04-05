import  style  from "./ProyectHeader.module.scss";
import Image from 'next/image'

export const ProyectHeader = () =>{
    return (
        <section  className="flex flex-col" >

        <section  className="flex gap-10 mt-6" >
            <div>
                <div  className={style.logo + ' shadow-md relative border-8'} >
                    <div  className="absolute w-full h-full" >

                        <Image
                            src="https://user-images.githubusercontent.com/61214852/118196015-8391ae00-b409-11eb-9cbc-a40b9bae3aa5.png"
                            alt="Pokemon x AR"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    
                </div>
            </div>

            <div   >
                <div  className="text-2xl font-bold flex-1 " >Pokemon x AR</div>
                
                <div>
                    <div className="mt-2 mb-2 flex gap-2 " >
                        <a href="https://github.com/gustavo-exe/ArJsPokemon" target="_blank" rel="noopener noreferrer">
                            <div  className={style.github} ></div>
                        </a>
                        
                        <a href="https://gustavo-exe.github.io/ArJsPokemon/" target="_blank" rel="noopener noreferrer">
                            <div  className={style.web} ></div>
                        </a>
                        <div className="border-r  border-r-black" ></div>
                        <div className={`thumbnail-xs thumbnail-2`}></div>
                        <div className={`thumbnail-xs thumbnail-4`}></div>
                        <div className={`thumbnail-xs thumbnail-11`}></div>
                        <div className={`thumbnail-xs thumbnail-17`}></div>
                    </div>
                </div>

               <div  className="hidden md:block" >
                    Es una pagina que cree con los diferentes tipos de realidad aumentada en AR.js con un plus de Model Viewer.

Logre obtener los conocimientos para realizar el proyecto en EDteam en el curso Realida aumentada en la web con AR.js.

Tengo pensado ir modificando o adaptando el sitio web, para explotar mejor los conocimientos.
                </div>
            </div>
        </section>


        <div className="mt-4 sm:hidden" >
            Es una pagina que cree con los diferentes tipos de realidad aumentada en AR.js con un plus de Model Viewer.

Logre obtener los conocimientos para realizar el proyecto en EDteam en el curso Realida aumentada en la web con AR.js.

Tengo pensado ir modificando o adaptando el sitio web, para explotar mejor los conocimientos.
        </div>
        </section>
    )
}