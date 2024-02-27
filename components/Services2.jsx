import React from 'react'

const Services2 = () => {
    return (
        <>
            {/* Primer contenedor */}
            <div className="container">
                {/* Fila */}
                <div className="row">
                    <div className="col-sm-12">
                        <div className="main-lead mb-80">
                            <h3 className="mb-10">Who Are We.</h3>
                            <p>Next is an efficient and talented team of designers and developers of information.</p>
                        </div>
                    </div>
                </div>
                {/* Fin de la fila */}
            </div>
            {/* Fin del primer contenedor */}

            {/* Segundo contenedor */}
            <div className="container inline-content split-container">
                {/* Fila */}
                <div className="row">
                    <div className="col-md-8 img-content radius">
                        <div className="img-block">
                            <div className="background-img">
                                <img alt="" src="img/site/1.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-md-push-5 intro-content push-right">
                        <div className="inner-content">
                            <h2 className="mb-10">We Are a Digital Agency.</h2>
                            <p>Next is an interactive communication agency specialized in website design, print support, which do not have secret anymore for us. We deliver our clients the best products in the domain which we master best. Our team brings a very specific value to your projects.</p>
                            <a className="plus-btn" href="about.html"><i className="icon-plus"></i></a>
                        </div>
                    </div>
                </div>
                {/* Fin de la fila */}
            </div>
            {/* Fin del segundo contenedor */}

            {/* Línea horizontal */}
            <hr className="mt-100 mb-100" />

            {/* Tercer contenedor */}
            <div className="container">
                {/* Fila */}
                <div className="row">
                    <div className="col-sm-12">
                        <div className="main-lead mb-80">
                            <h3 className="mb-10">What We Do.</h3>
                            <p>Our work with clients has always been at the intersection of deep industry expertise and extensive capabilities.</p>
                        </div>
                    </div>
                </div>
                {/* Fin de la fila */}
            </div>
            {/* Fin del tercer contenedor */}

            {/* Cuarto contenedor */}
            <div className="container inline-content">
                {/* Fila */}
                <div className="row">
                    <div className="col-sm-4">
                        {/* Caja 1 */}
                        <div className="box">
                            <div className="box-img">
                                <img src="img/site/2.jpg" alt="" />
                            </div>
                            <div className="box-content">
                                <h3 className="mb-5">Digital Business </h3>
                                <p>Digital business is the creation of new business designs by blurring the digital...</p>
                            </div>
                            <a className="link" href="services.html"></a>
                            <a className="more" href="services.html">
                                <span>
                                    <i className="icon-plus"></i>
                                </span>
                            </a>
                        </div>
                        {/* Fin de la Caja 1 */}
                    </div>
                    <div className="col-sm-4">
                        {/* Caja 2 */}
                        <div className="box">
                            <div className="box-img">
                                <img src="img/site/3.jpg" alt="" />
                            </div>
                            <div className="box-content">
                                <h3 className="mb-5">Mobile Development </h3>
                                <p>Mobile application development is a term used to denote the act or process by which...</p>
                            </div>
                            <a className="link" href="services.html"></a>
                            <a className="more" href="services.html">
                                <span>
                                    <i className="icon-plus"></i>
                                </span>
                            </a>
                        </div>
                        {/* Fin de la Caja 2 */}
                    </div>
                    <div className="col-sm-4">
                        {/* Caja 3 */}
                        <div className="box">
                            <div className="box-img">
                                <img src="img/site/4.jpg" alt="" />
                            </div>
                            <div className="box-content">
                                <h3 className="mb-5">Apps Development </h3>
                                <p>As part of the development process, mobile user interface design is also essential...</p>
                            </div>
                            <a className="link" href="services.html"></a>
                            <a className="more" href="services.html">
                                <span>
                                    <i className="icon-plus"></i>
                                </span>
                            </a>
                        </div>
                        {/* Fin de la Caja 3 */}
                    </div>
                </div>
                {/* Fin de la fila */}
            </div>
            {/* Fin del cuarto contenedor */}
        </>)
}

export default Services2