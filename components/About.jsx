
const About = () => {
    return (
        <>
            {/* Primer contenedor */}
            <div className="container">
                {/* Row */}
                <div className="row">
                    <div className="col-sm-12">
                        <div className="main-lead mb-80">
                            <h3 className="mb-10">Bienvenido!</h3>
                            <p>Soy Marcelo, un apasionado kinesiólogo con 12 años de experiencia dedicados al fascinante mundo de la traumatología y ortopedia.</p>
                        </div>
                    </div>
                </div>
                {/* Fin de la fila */}
            </div>
            {/* Fin del primer contenedor */}

            {/* Segundo contenedor */}
            <div className="container inline-content split-container">
                {/* Row */}
                <div className="row">
                    <div className="col-md-8 img-content radius">
                        <div className="img-block">
                            <div className="background-img">
                                <img alt="" src="img/kinepaiva.png" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-md-push-5 intro-content push-right">
                        <div className="inner-content">
                            <h2 className="mb-10">Rehabilitación con sentido.</h2>
                            <p>Mi enfoque especializado como osteópata y magister en terapia manual ortopédica me ha permitido destacarme en el tratamiento del dolor musculoesquelético y las lesiones deportivas. Mi práctica profesional se basa en la combinación efectiva de ejercicio terapéutico, educación y fisioterapia, brindando soluciones integrales a mis pacientes.</p>
                            <a className="plus-btn" href="about.html"><i className="icon-plus"></i></a>
                        </div>
                    </div>
                </div>
                {/* Fin de la fila */}
            </div>
            {/* Fin del segundo contenedor */}
        </>)
}

export default About