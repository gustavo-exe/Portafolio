import styles from './Actividades.module.scss';

export const Actividades = () => {

    return(
        <>
        <section id="Actividades" className={styles.Actividades+ '  container-layout mt-24 mb-24'} >
            <div className={styles.actividadesActividad + ' ' + styles.actividadesActividadLeft} >
               
                <div>
                    <p className="actividades-rotate" >Ahora</p>
                    <p >
                    Desarrollador en Creative  <br />  Information Technologies
                    </p>
                </div>

                <div>
                    <p className="actividades-rotate" >2021</p>
                    <p >Asistente de<br></br> curso en EDteam</p>
                </div>
                
            </div>
            
            <h1>Actividades</h1>
            
            <div className={styles.actividadesActividad + ' ' + styles.actividadesActividadRight}  >
                <div>
                    <p className="actividades-rotate" >2021 <br /> 2022  </p>
                    <p>Microsoft learn <br></br> student ambassador</p>
                </div>
                <div>
                    <p className="actividades-rotate" >2019 <br /> 2022  </p>
                    <p>Estudiante de Ingenieria <br></br> en Ciencias de la Computacion</p>
                </div>
            </div>
        </section>
        </>
    )
}