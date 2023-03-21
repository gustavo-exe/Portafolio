import React, { useEffect, useRef } from 'react';
import style from "./Cover.module.scss";

export const Cover = () =>{

    const containerRef = useRef<HTMLDivElement>(null);
    const boxRef = useRef<HTMLDivElement>(null);
  
    const isClicked = useRef<boolean>(false);
  
    const coords = useRef<{
      startX: number,
      startY: number,
      lastX: number,
      lastY: number
    }>({
      startX: 0,
      startY: 0,
      lastX: 0,
      lastY: 0
    })
  
    useEffect(() => {
      if (!boxRef.current || !containerRef.current) return;
  
      const box = boxRef.current;
      const container = containerRef.current;
  
  
      const onMouseDown = (e: MouseEvent) => {
        isClicked.current = true;
        coords.current.startX = e.clientX;
        coords.current.startY = e.clientY;
      }
  
      const onMouseUp = (e: MouseEvent) => {
        isClicked.current = false;
        coords.current.lastX = box.offsetLeft;
        coords.current.lastY = box.offsetTop;
      }
  
      const onMouseMove = (e: MouseEvent) => {
        if (!isClicked.current) return;
  
        const nextX = e.clientX - coords.current.startX + coords.current.lastX;
        const nextY = e.clientY - coords.current.startY + coords.current.lastY;
  
        box.style.top = `${nextY}px`;
        box.style.left = `${nextX}px`;
      }
  
      box.addEventListener('mousedown', onMouseDown);
      box.addEventListener('mouseup', onMouseUp);
      container.addEventListener('mousemove', onMouseMove);
      container.addEventListener('mouseleave', onMouseUp);
  
      const cleanup = () => {
        box.removeEventListener('mousedown', onMouseDown);
        box.removeEventListener('mouseup', onMouseUp);
        container.removeEventListener('mousemove', onMouseMove);
        container.removeEventListener('mouseleave', onMouseUp);
      }
  
      return cleanup;
    }, [])


    return(
        <div className='container-layout'  >
        <section className={style.cover}>
                
                <div className={style.coverTexts} >
                    <p className={style.coverNombre} >Soy <b>Gustavo Elias Meza</b></p>
                    <p className={style.coverCaption} >
                    Desarrollador web, diseñador UI, Ingeniero en Ciencias de la computación y aspirante a ser el siguiente Iron Man (maybe).
                    </p>
                </div>

                <div className={style.coverImage} >

                    <div  ref={containerRef} className={style.containerBox} >
                        
                        <div  ref={boxRef}  className={style.box} >
                            <div  className={style.DragWidget} >

                                <section className={style.header} >
                                    <div className="flex   items-center  gap-2"  >
                                        <div className={style.cuadrado} ></div>
                                        <span>Drag me</span>
                                    </div>

                                    <div>
                                        x
                                    </div>
                                </section>

                                <section className={style.contenido} >
                                i do magic as dev
                                </section>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}