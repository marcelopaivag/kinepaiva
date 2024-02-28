import React from 'react'

const About = () => {
    return (
        <div className="container flex flex-col">

            <div className="flex flex-col">
                <h3 className="mb-2 text-xl">Bienvenido!</h3>
                <p className='mb-4'>Soy Marcelo, un apasionado kinesiólogo con 12 años de experiencia
                    dedicados al fascinante mundo de la traumatología y ortopedia.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">

                <div className="md:col-span-1 img-content radius w-full">
                    <div className="img-block h-full">
                        <div className="background-img">
                            <img alt="Imagen para el about" src="" />
                        </div>
                    </div>
                </div>

                <div className="md:col-span-1 intro-content text-center push-right">
                    <div className="inner-content bg-teal-500 p-10 mt-10 mb-10">
                        <h2 className="mb-2 text-xl">Rehabilitación con sentido</h2>
                        <p className='mb-4'>Mi enfoque especializado como osteópata y magister en terapia manual ortopédica me ha
                            permitido destacarme en el tratamiento del dolor musculoesquelético y las lesiones
                            deportivas.
                            Mi práctica profesional se basa en la combinación efectiva de ejercicio terapéutico,
                            educación y
                            fisioterapia, brindando soluciones integrales a mis pacientes.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default About