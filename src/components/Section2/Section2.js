import Celular from './celular.webp'


function Section2() {

    return (
        <>
            <section>
                <div className="">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="content my-5 mx-auto align-self-center">
                                <img src={Celular} alt="imagen prueba" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex">
                            <div className="align-self-center">
                                <h1 className="display-4 fw-bold">Haz que crezca tu dinero.</h1>
                                <ul className="list-unstyled">
                                    <li className="d-flex mb-4">
                                        <p className="text-primary lead fw-bold step">1</p>
                                        <div className="ms-3">
                                            <p className="lead fw-bolder">Crea tu cuenta<span className="text-primary">.</span></p>
                                            <p>Es muy sencillo, ingresa tu celular y listo.</p>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-4">
                                        <p className="text-primary lead fw-bold step">2</p>
                                        <div className="ms-3">
                                            <p className="lead fw-bolder">Solicita tu tarjeta personalizada.
                                                <p>Selecciona el coloe que más te guste para tu tarjeta, la enviaremos a tu domicio.
                                                </p>
                                            </p>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-4">
                                        <p className="text-primary lead fw-bold">3</p>
                                        <div className="ms-3">
                                            <p className="lead fw-bolder">Activa tu tarjeta.</p>
                                            <p>Iiciar sesión en la app e ingresa el número de tarjeta</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}

export default Section2;