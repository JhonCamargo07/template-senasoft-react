import Banco from './banco.png';
const bootstrap = require('bootstrap');

function Section1() {
    return (
        <>
            <div className="row g-0 h-100 w-100">
                <div className="col-lg-6 d-flex ">
                    <div className="content mx-auto align-self-center px-4 my-5">
                        <h1 className="display-4 fw-bold">La mejor banda digital.</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio ratione sed veritatis
                            aperiam,
                            modi provident suscipit voluptatem adipisci consequatur dolor! Dolor deleniti animi labore
                            totam
                            praesentium perspiciatis nemo similique quas.</p>
                        {/* <a href="login.html" className="btn btn-primary text-white fw-bolder mb-5">Abre tu cuenta aquí</a> */}
                        <div className="d-flex me-4">
                            <div className="d-flex mb-4 me-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-apple" viewBox="0 0 16 16">
  <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
  <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
</svg>
                                <div>
                                    <small>Consíguela en</small>
                                    <p className="fw-bold mb-0">Apple</p>
                                </div>
                            </div>
                            <div className="d-flex mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-google-play" viewBox="0 0 16 16">
                                    <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586Zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295ZM1 13.396V2.603L6.846 8 1 13.396ZM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27Z" />
                                </svg>
                                <div>
                                    <small>Consíguela en</small>
                                    <p className="fw-bold mb-0">Apple</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 d-flex" >
                    <div className="content mx-auto align-self-center my-5">
                        <img src={Banco} alt="Logo" className="img-fluid mb-4" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section1;