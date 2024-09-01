import style from "./Contact.module.scss";

export const Contact = () =>{
    return(
        <div  className="pt-32 pb-32 max-sm:pb-8"  >
          <section  className="container-layout  flex p-4  flex-wrap "  >

            <div  className="bg-variant p-8 lg:p-10 flex-1 flex flex-col justify-center" id="contact" >


              <section className="relative" >
                <p  className="text-4xl md:text-6xl mb-4 absolute font-extrabold -top-[3.6rem] lg:-top-[6rem] -left-[3rem]" >
                  ¿Conversamos?
                </p>

                <div>
                Ademas de programar... Me gusta ir por un cafe, comer hamburguesas,  hablar de artistas, tomar fotos, videojuegos  de nintendo, ver peliculas (Marvel o DC ambos me gustan)
                </div>
              </section>


              <section  className="mt-20" >
                <div>ps... puedes contactarme por aqui:</div>
                <div  className="flex mt-4 gap-2" >
                    <a href="https://www.linkedin.com/in/gustavoeliasexe/"  target="_blank" >
                      <div  className={style.linkedin} ></div>
                    </a>
                    <a href="https://www.instagram.com/gustavoeliasexe/"  target="_blank" >
                      <div  className={style.Instagram} ></div>
                    </a>
                    <a href="https://twitter.com/gustavoeliasexe"  target="_blank" >
                      <div  className={style.twitter} ></div>
                    </a>
                    <a href="mailto:gustavoexe136@gmail.com"  target="_blank" >
                      <div  className={style.email} ></div>
                    </a>
                    <a href="https://github.com/gustavo-exe"  target="_blank" >
                      <div  className={style.github} ></div>
                    </a>
                </div>
              </section>

            </div>


            <div className={style.imageContact + ' w-full lg:w-[40rem]'}   >
              
            </div>

          </section>
        </div>
    )
}