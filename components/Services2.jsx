import React from 'react'

const Services2 = () => {
    return (
        <div className="container flex flex-col">

            <div className="flex flex-col ">
                <h3 className="mb-2">Rehabilitación con sentido</h3>
                <p className='mb-4'>Con ejercicio terapéutico, educación y fisioterapia
                    soy el encargado de asistrir una recuperación de la que tú debes ser protagonista.</p>
            </div>

            <div className="md:col-span-1 img-content radius w-full">
                <div className="img-block h-full">
                    <div className="background-img">
                        <img alt="Imagen servicios" src="{Image}" />
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">

                <div className="md:col-span-1 intro-content text-center push-right">
                    <div className="inner-content">
                        <img alt="Imagen servicios" src="{Image}" />
                        <h2 className="mb-2">Ejercicio terapéutico</h2>
                        <p className='mb-4'>Actualmente el ejercicio terapéutico es el tratamiento que cuenta con mayor
                            evidencia científica, el kinesiólogo debe ser un profesional capacitado para establecer un
                            diagnóstico funcional y una prescripción de ejercicio terapéutico para lograr una disminución de
                            la discapacidad funcional, efectiva y segura.
                        </p>

                        <a href="about.html" className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-700">
                            Ver más
                            <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>

                    </div>
                </div>

                <div className="md:col-span-1 intro-content text-center push-right">
                    <div className="inner-content">
                        <img alt="Imagen servicios" src="{Image}" />
                        <h2 className="mb-2">Terapia manual ortopédica</h2>
                        <p className='mb-4'>La TMO es un enfoque especializado en kinesiología musculoesquelética que se
                            centra en el tratamiento de lesiones y trastornos relacionados con los músculos y las
                            articulaciones. Los profesionales en este campo utilizan técnicas manuales, como el masaje
                            terapéutico, la manipulación articular y el estiramiento, para mejorar la movilidad, aliviar el
                            dolor y promover la función normal de las estructuras musculoesqueléticas.
                        </p>

                        <a href="about.html" className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-700">
                            Ver más
                            <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>

                    </div>
                </div>

                <div className="md:col-span-1 intro-content text-center push-right">
                    <div className="inner-content">
                        <img alt="Imagen servicios" src="{Image}" />
                        <h2 className="mb-2">Fisioterapia</h2>
                        <p className='mb-4'>El kinesiólogo es el único profesional no médico, con formación universitaria,
                            capacitado para aplicar los diferentes medios y técnicas terapéuticas con agentes físicos no
                            ionizantes. Esto refiere a la utilización de corriente eléctrica o energía mecánica para
                            acelerar procesos de recuperación, aliviar el dolor y mejorar la funcionalidad en
                            procesos de rehabilitación física o para mantener la salud.
                        </p>
                        <a href="about.html" className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-700">
                            Ver más
                            <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>







            </div>

        </div>
    )
}

export default Services2