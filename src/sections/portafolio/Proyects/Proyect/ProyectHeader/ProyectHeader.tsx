import { useState } from "react";
import { ProyectHeaderInterface } from "./ProyectHeader.interface";
import  style  from "./ProyectHeader.module.scss";
import Image from 'next/image'

export const ProyectHeader = ({ proyectHeader }: { proyectHeader: ProyectHeaderInterface }) =>{
   
    const [showMore, setShowMore] = useState(false);
   
    return (
        <section  className="flex flex-col" >

        <section  className="flex md:gap-10 mt-6  max-sm:gap-4" >
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
                <div  className="text-2xl font-bold flex-1 text-wrap " >{proyectHeader.nombre}</div>
                
                <div  className="max-sm:mt-4" >
                    <div className="mt-2 mb-2 flex gap-2 flex-wrap" >
                        <a href={proyectHeader?.repositorio} target="_blank" className="cursor-pointer">
                            <div  className={style.github} ></div>
                        </a>
                        
                        {
                            proyectHeader.publictSite.length > 0 &&
                            
                        <a href={proyectHeader.publictSite} target="_blank" className="cursor-pointer">
                            <div  className={style.web} ></div>
                        </a>
                        }

                        <div className="border-r  border-r-black flex flex-wrap" ></div>
                        
                        {
                            proyectHeader.tools.map((tool, i)=>{
                                return(

                                    <div key={i} className={`thumbnail-xs thumbnail-` + tool  }></div>
                                )
                            })
                        }

                    </div>
                </div>

               <div   className={` hidden md:block `} >
                    {proyectHeader.descripcion}
                </div>
            </div>
        </section>


        <div  className="mt-4 sm:hidden" >
            
            <span className={` ${showMore ?  style.showAll : style.clampText}`}>
                {proyectHeader.descripcion}
            </span>
            
            
                <button className={`text-xs font-medium` }  onClick={() => setShowMore(!showMore   )}>
                 {showMore ? 'Ver menos' : 'Ver más'}
                </button>
        
        </div>
        </section>
    )
}