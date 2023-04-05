import React, { useState } from 'react';
import { SideNavigationBar } from '../SideNavigationBar/SideNavigationBar';
import { Link } from "react-scroll";
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
                    <Link  className="cursor-pointer"  to="AcercaDe" smooth={true} >Elias' overview</Link>
                    <Link  className="cursor-pointer"  to="Actividades" smooth={true} >Actividades</Link>
                    <Link  className="cursor-pointer"  to="iCan" smooth={true} >Skills & tools</Link>
                    <Link  className="cursor-pointer"  to="Proyects" smooth={true} >Proyectos</Link>
                    <Link  className="cursor-pointer"  to="contact" smooth={true} >Contacto</Link>
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