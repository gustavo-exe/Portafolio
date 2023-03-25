import React, { useState } from 'react';
import { SideNavigationBar } from '../SideNavigationBar/SideNavigationBar';

import styles from './NavBar.module.scss';

export const NavBar = () => {

    
    const [isOpenSide, setOpenSide] = useState(false);

    return (

        <div className="container-layout border-b items-center border-b-black flex justify-between pt-2 pb-2" >
            <div className='flex  items-center '   >
                <div className={styles.logo} ></div>
                <div   >
                    gustavoeliasexe
                </div>

            </div>

            <div className={styles.nav} >
                <nav className="flex gap-2" >
                    <a href="#AcercaDe" >Acerca de Elias</a>
                    <a href="#Actividades" >Actividades</a>
                    <a href="#iCan" >I can do and tools</a>
                    <a href="#Proyectos" >Proyectos</a>
                    <a href="#contact" >Contacto</a>
                </nav>
            </div>

            <section  className={styles.side} >
                <div className={styles.burguerMenu + ' cursor-pointer ' + ` ${isOpenSide ? styles.close : styles.open}  ` } onClick={()=>{setOpenSide(!isOpenSide)}}  >

                </div>
                
                {
                    isOpenSide && <SideNavigationBar onChildEvent={()=>{setOpenSide(!isOpenSide)}} />
                }
            </section>

        </div>

    )
}
;