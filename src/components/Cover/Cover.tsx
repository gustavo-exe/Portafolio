import React from 'react';

import style from "./Cover.module.scss";

export const Cover = () =>{
    return(
        <div className='container-layout'  >
        <section className={style.cover}>
                
                <div className={style.coverTexts} >
                    <p className={style.coverNombre} >Soy <b>Gustavo Elias Meza</b></p>
                    <p className={style.coverCaption} >
                    Desarrollador web, diseñador UI, Ingeniero en Ciencias de la computación y aspirante a ser el siguiente Iron Man (maybe).
                    </p>
                </div>

                <div  className={style.coverImage} >

                </div>
            </section>
        </div>
    )
}