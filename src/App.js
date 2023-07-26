import './App.css';
import Banner from './Components/Banner/Banner';
import BookContainer from './Components/BookContainer/BookContainer.js';
import Service from './Components/Service/Service';
import SaleCarRender from './Components/SaleCar/SaleCarRender';
import ServiceExperience from './Components/ServiceExperience/ServiceExperience';
import Driver from './Components/Driver/Driver';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Banner/>
        <BookContainer/>
        <Service/>
        <SaleCarRender/>
        <ServiceExperience/>
        <Driver/>
        <Footer/>
    </div>
  );
}

export default App;
