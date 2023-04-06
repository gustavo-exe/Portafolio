import { ProyectHeaderInterface } from "./ProyectHeader.interface";
import  style  from "./ProyectHeader.module.scss";
import Image from 'next/image'

export const ProyectHeader = ({ proyectHeader }: { proyectHeader: ProyectHeaderInterface }) =>{
    return (
        <section  className="flex flex-col" >

        <section  className="flex gap-10 mt-6" >
            <div>
                <div  className={style.logo + ' shadow-md relative border-8'} >
                    <div  className="absolute w-full h-full" >

                        <Image
                            src={proyectHeader.logo}
                            alt={proyectHeader.nombre}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    
                </div>
            </div>

            <div   >
                <div  className="text-2xl font-bold flex-1 " >{proyectHeader.nombre}</div>
                
                <div>
                    <div className="mt-2 mb-2 flex gap-2 " >
                        <a href={proyectHeader.repositorio} target="_blank" rel="noopener noreferrer">
                            <div  className={style.github} ></div>
                        </a>
                        
                        <a href={proyectHeader.publictSite} target="_blank" rel="noopener noreferrer">
                            <div  className={style.web} ></div>
                        </a>

                        <div className="border-r  border-r-black" ></div>
                        
                        {
                            proyectHeader.tools.map((tool, i)=>{
                                return(

                                    <div key={i} className={`thumbnail-xs thumbnail-` + tool  }></div>
                                )
                            })
                        }

                    </div>
                </div>

               <div  className="hidden md:block" >
                    {proyectHeader.descripcion}
                </div>
            </div>
        </section>


        <div className="mt-4 sm:hidden" >
            {proyectHeader.descripcion}
        </div>
        </section>
    )
}