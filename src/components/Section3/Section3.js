import Final from './final.png'

function Section2() {

    return (
        <>
            <div class="container align-self-center">
            <div class="call-to-action my-4 bg-light">
                <div class="row">
                    <div class="col-lg-7 d-flex align-content-end">
                        <div class="mx-5 mt-5 align-self-center">
                            <h2 class="display-4 fw-bold my-4 my-lg-0 mb-4">Controle y retire su dinero al instante.
                            </h2>
                            <p class="lead mb-4">Tu dinero está seguro en todo momento, puedes consultar todos los
                                movimientos de tu cuenta directamente desde tu celular.</p>
                            <a href="login.html" class="btn btn-primary text-white fw-bolder">Abre tu cuenta hoy</a>
                        </div>
                    </div>
                    <div class="col-lg-5 d-flex py-5">
                        <div class="mx-auto align-self-center">
                            <img src={Final} alt="Imagen 2" class="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );

}

export default Section2;