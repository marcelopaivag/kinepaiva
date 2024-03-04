import React from 'react'
import Image from 'next/image'
import ejercicio2 from '@/public/images/ejercicio2.png'
import ejercicio3 from '@/public/images/ejercicio3.png'
import tmo from '@/public/images/tmo.png'
import tr1 from '@/public/images/tr1.png'

const Services2 = () => {
    return (
        <div className="flex flex-col items-center justify-center align-items">

            <div className="grid md:grid-cols-3 gap-6 mt-5">

                <div className="bg-blue-900 shadow-md rounded p-4 md:col-span-1 text-center">
                    <div>
                        <Image
                            className='w-40 h-40 object-cover rounded-full mx-auto'
                            src={ejercicio3}
                            alt="Texto alternativo"
                        />
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

                <div className="bg-blue-900 shadow-md rounded p-4 md:col-span-1 text-center">
                    <div>
                        <Image
                            className='w-40 h-40 object-cover rounded-full mx-auto mb-4'
                            src={tmo}
                            alt="Texto alternativo"
                        />
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

                <div className="bg-blue-900 shadow-md rounded p-4 md:col-span-1 text-center">
                    <div>
                        <Image
                            className='w-40 h-40 object-cover rounded-full mx-auto mb-4'
                            src={tr1}
                            alt="Texto alternativo"
                        />
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

            <div className="md:col-span-1 img-content radius w-full mt-3">
                <div className="img-block h-full">
                    <div className="background-img">
                        <Image
                            src={ejercicio2}
                            alt=""
                            layout="responsive"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Services2