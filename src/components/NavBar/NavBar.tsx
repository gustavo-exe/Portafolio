import React from 'react';


export const NavBar = () => {

return( 

    <header >
        <div   >
            <div ></div>
            <div  >
                console.log("elias.js")
            </div>
        </div>

        <div  >
            <button id="Despliegue"  >
                <img id="Icono_De_Menu" src="./imgs/icons/menu_black_24dp.svg" alt="Icono de hamburgesa" ></img>
            </button>
            <nav  >
                <a href="#AcercaDe" >Acerca de Elias</a>
                <a href="#Actividades" >Actividades</a>
                <a href="#CosasQuePuedoHacer" >I can do</a>
                <a href="#Herramientas" >Herramientas</a>
                <a href="#Proyectos" >Proyectos</a>
            </nav>
        </div>
    </header>

    )
}
