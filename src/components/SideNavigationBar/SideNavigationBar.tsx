import styles from "./SideNavigationBar.module.scss";
import { Link } from "react-scroll";

export const SideNavigationBar = (props:any) =>{

    const closeAside = () =>{

        props.onChildEvent(false);
    }

return(
    <div  className={styles.side +' '+ 'bg-dark-eerie'} >
    
    <section  className="color-white text-center mt-14 " >
        <div  className="t-h4" >This is a menu</div>
        <div>like bubbles</div>
    </section>

    <section   className="mt-14 p-4 grid grid-cols-2  gap-2 " >
        <div  className="row-start-1 row-end-2 flex justify-center items-center" >
            <Link className="cursor-pointer" onClick={closeAside} smooth={true} to="AcercaDe">
            <div className={styles.bubbleBig  } >
                    Elias' overview
            </div>
            </Link>
        </div>
        <div  className="row-start-1 row-end-3 mt-8 flex items-center " >
               <Link className="cursor-pointer" onClick={closeAside} smooth={true} to="Actividades">
                <div className={styles.bubbleBig  } >
                    Actividades
                </div>
               </Link>
        </div>
        <div  className="row-start-2 row-end-4 ml-8  flex justify-center items-center " >
               <Link className="cursor-pointer" onClick={closeAside} smooth={true} to="iCan">
                <div className={styles.bubbleSmall  } >
                    Skills & tools
                </div>
               </Link>
        </div>
        <div  className=" mt-4  flex justify-center items-center" >
               <Link className="cursor-pointer" onClick={closeAside} smooth={true} to="Proyects">
                <div className={styles.bubbleMedium  } >
                    Proyectos
                </div>
               </Link>
        </div>
        <div  className=" flex items-center justify-center" >
           <Link className="cursor-pointer" onClick={closeAside} smooth={true} to="contact">
            <div className={styles.bubbleBig + '   ' } >
                Contacto
            </div>
           </Link>
        </div>
    </section>
    </div>
)
}