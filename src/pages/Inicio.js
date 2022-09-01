import Section1 from '../components/section1/Section1';
import Section2 from '../components/Section2/Section2';
import Section3 from '../components/Section3/Section3';
import Footer from '../components/Footer/Footer';

function Inicio(){

    return (
        <>
        <div className="container d-flex">
          <Section1 />
        </div>
        <div className="container">
          <Section2 />
          <Section3 />
        </div>
        <Footer />
  
      </>
    );

}

export default Inicio;