import Image from 'next/image'
import style from "./ProyectGallery.module.scss";

export const ProyectGallery = ({gallery}:{gallery:any[]}) =>{
    return(
        <div className="grid grid-rows-1 grid-flow-col gap-4 mt-4 ">


            {
                gallery.map((x,i)=>{
                    return(

                    <div key={i} className=" w-full h-full"   >

                        <div className={style.image} >

                            <div  className="absolute w-full h-full shadow-md border-8"  >
                                <Image
                                    src={x}
                                    alt={x}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </div>
                        
                    </div>
                    )
                })
            }

        </div>
    )
}