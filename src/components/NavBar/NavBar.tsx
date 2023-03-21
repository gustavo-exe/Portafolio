import React from 'react';

import styles from './NavBar.module.scss';

export const NavBar = () => {

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
                    <a href="#CosasQuePuedoHacer" >I can do</a>
                    <a href="#Herramientas" >Herramientas</a>
                    <a href="#Proyectos" >Proyectos</a>
                </nav>
            </div>
        </div>

    )
}
;