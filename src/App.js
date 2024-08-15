
import './App.css';
import Hero from './componants/Hero/Hero';
import Title from './componants/Title/Title';
import About from './componants/about/About';
import Campus from './componants/campus/Campus';
import Contact from './componants/contact/Contact';
import Footer from './componants/footer/Footer';
import NavigationBar from './componants/navbar/NavigationBar';
import Programs from './componants/programs/Programs';
import Testinomials from './componants/testinomilas/Testinomials';

function App() {
  return (
  <>
  <NavigationBar/>
  <Hero/>
  <div className="container">
    <Title subTitle="Our Programs" title="What We Offer"/>
  <Programs/>
  <About/>
  <Title subTitle="GALLERY" title="Campus Photos"/>
  <Campus/>
  <Title subTitle="TESTINOMIAL" title="What Student Says"/>
  <Testinomials/>
  <Title subTitle="Contact Us" title="Get in Touch"/>
  <Contact/>
  <Footer/>
  </div>
 
  </>
  );
}

export default App;
