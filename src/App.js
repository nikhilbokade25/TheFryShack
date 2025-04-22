import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero';
import About from './Components/About';
import Products from './Components/Products';
import Events from './Components/Events';
import Subscribe from './Components/Subscribe';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Hero/>
      <About/>
      <Products/>
      <Events/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
