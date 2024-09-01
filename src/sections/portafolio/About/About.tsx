import { useEffect, useState } from "react";

export const About = () =>{

    const birthDate = '1999-04-21'; // Fecha de nacimiento fija

    const calculateAge = (dob: string): number => {
        const today = new Date();
        const birth = new Date(dob);
        let age = today.getFullYear() - birth.getFullYear();
        const monthDifference = today.getMonth() - birth.getMonth();

        // Verifica si el cumpleaños ya ocurrió este año
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
        age--;
        }

        return age;
    };

    const [age, setAge] = useState<number>(calculateAge(birthDate));

    useEffect(() => {
        const updateAge = () => {
        setAge(calculateAge(birthDate));
        };

        const today = new Date();
        const nextApril21 = new Date(today.getFullYear(), 3, 21); // Abril es el mes 3 (0-indexado)

        if (today > nextApril21) {
        nextApril21.setFullYear(today.getFullYear() + 1);
        }

        const timeUntilNextApril21 = nextApril21.getTime() - today.getTime();

        const timer = setTimeout(updateAge, timeUntilNextApril21);

        // Limpia el timeout si el componente se desmonta
        return () => clearTimeout(timer);
    }, []);

    return(
        <section id="AcercaDe"  className='   gradient-yellow ' >
            <div  className="container-layout  pt-20 pb-20  pl-1 pr-4 pl-4  " >
                <div className="mb-9 t-h3" >
                    Acerca de Elias
                </div>

                <div className="mb-9   font-bold">
                    Mi curiosidad siempre me lleva a lugares que aún no exploro o probar con alguna idea por lo cual me gusta arriesgarme y cuando es en equipo es mucho mejor porque se juntan diferentes mentes a crear un nuevo espacio. La tecnológica es un buen lugar para explorar, como desarrollador web mi objetivo es combinar el estilo de una identidad visual y hacerla funcional.
                </div>

                <div  className="mb-4" >
                Tengo {age} años, Hondureño. En la actualidad, estoy graduado de Ingeniería en Ciencias de la Computación en la Universidad Católica de Honduras campus Jesús Sacramentado, antes obtuve un título de Bachillerato Técnico Profesional en Informática. Mi labor como estudiante aún no finaliza, porque siempre googleo, estoy pendiente de comunidades o incluso cursos que alimenten mi curiosidad por el mundo tecnologico.
                </div>

                <div>
                Desde los 10 años me intereso en la tecnología y mis estudios los aproveche para aprender programación y por mi cuenta me he dedicado al diseño.
                </div>
            </div>
        </section>
    )
}