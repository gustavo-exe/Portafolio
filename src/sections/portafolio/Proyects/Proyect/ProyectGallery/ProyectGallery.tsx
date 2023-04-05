import Image from 'next/image'
import style from "./ProyectGallery.module.scss";

export const ProyectGallery = () =>{
    return(
        <div className="grid grid-rows-1 grid-flow-col gap-4 mt-4 ">
            <div className=" w-full h-full"   >

                <div className={style.image} >

                    <div  className="absolute w-full h-full shadow-md border-8"  >
                         <Image
                            src="https://raw.githubusercontent.com/gustavo-exe/Portafolio/c0ff4151bc7d4597166e944ba537205f37890d1f/imgs/MockupPokemon.jpg"
                            alt="Pokemon x AR"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>
                
            </div>
            

            <div className=" w-full h-full"   >

                <div className={style.image} >

                    <div  className="absolute w-full h-full shadow-md border-8"  >
                         <Image
                            src="https://raw.githubusercontent.com/gustavo-exe/ArJsPokemon/master/assets/Portadas/ImageTracking.jpg"
                            alt="Image tracking"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>
                
            </div>
        </div>
    )
}