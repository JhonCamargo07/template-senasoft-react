import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";


function Usuario() {

    return (
        <>
            <Navbar />
            <div className="container my-5">
                <Card />
            </div>
            <Footer />

        </>
    );

}

export default Usuario;