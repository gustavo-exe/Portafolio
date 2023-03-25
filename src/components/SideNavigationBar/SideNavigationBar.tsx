import styles from "./SideNavigationBar.module.scss";


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
            <a onClick={closeAside} href="#AcercaDe">
            <div className={styles.bubbleBig  } >
                    Acerca 
                    <br />
                    de Elias 
            </div>
            </a>
        </div>
        <div  className="row-start-1 row-end-3 mt-8 flex items-center " >
               <a onClick={closeAside} href="#Actividades">
                <div className={styles.bubbleBig  } >
                    Actividades
                </div>
               </a>
        </div>
        <div  className="row-start-2 row-end-4 ml-8  flex justify-center items-center " >
               <a onClick={closeAside} href="#iCan">
                <div className={styles.bubbleSmall  } >
                    I can do
                    and
                    tools
                </div>
               </a>
        </div>
        <div  className=" mt-4  flex justify-center items-center" >
               <a onClick={closeAside} href="#Proyectos">
                <div className={styles.bubbleMedium  } >
                    Proyectos
                </div>
               </a>
        </div>
        <div  className=" flex items-center justify-center" >
           <a onClick={closeAside} href="#contact">
            <div className={styles.bubbleBig + '   ' } >
                Contacto
            </div>
           </a>
        </div>
    </section>
    </div>
)
}