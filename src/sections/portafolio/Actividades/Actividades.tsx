import styles from './Actividades.module.scss';

export const Actividades = () => {

    return (
        <>
            <section id="Actividades" className={styles.Actividades + '  container-layout mt-24 mb-24 p-4 lg:p-0'} >


                <p className='t-h3 text-center' >Actividades</p>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8' >
                    <article className={styles.mlsa + ' border rounded-2xl shadow-xl bg-dark-eerie text-white cursor-pointer'} >
                        <div className='hover:opacity-0 py-6 px-4' >
                            <p  className='mb-2'  >Microsoft learn
                                student ambassador</p>
                            <p className='opacity-40' >2021 - 2022</p>
                        </div>
                    </article>

                    <article className={styles.cit + ' border rounded-2xl shadow-xl bg-dark-eerie text-white cursor-pointer'} >
                        <div className='hover:opacity-0 py-6 px-4' >
                            <p  className='mb-2'  >Desarrollador en Creative
                                Information Technologies</p>
                            <p className='opacity-40' >2022 - Actulidad</p>
                        </div>
                    </article>

                    <article className={styles.edTeam + ' border rounded-2xl shadow-xl bg-dark-eerie text-white cursor-pointer'} >
                        <div className='hover:opacity-0 py-6 px-4' >
                            <p className='mb-2' > Asistente de curso en EDteam </p>
                            <p className='opacity-40' >2021</p>
                        </div>
                    </article>

                </div>


            </section>
        </>
    )
}