import Image from 'next/image'

export const IcanAndTools = () =>{
   

    const chips = [
        'Desarrollo Web',
        'Responsive design',
        'Graphic Design and Branding',
        'UI - UX (sometimes)'
    ]

    const thumbnails = Array.from({ length: 17 }, (_, i) => i + 1);

    return(
        <div  id="iCan" className="bg-dark-yet color-white" >
            <section   className="container-layout  p-6 " >

            <p  className="t-h3  text-center pb-12 " >
            Cosas que puedo hacer y mi caja de herramientas
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
            {chips.map(x => (
                <div className="p-2 rounded-lg bg-dark-eerie" key={x}>
                {x}
                </div>
            ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4 justify-center">
                {thumbnails.map((thumbnail) => (
                    <div
                    key={thumbnail}
                    className={`thumbnail thumbnail-${thumbnail}`}
                    ></div>
                ))}
            </div>

            </section>
        </div>
    )
}