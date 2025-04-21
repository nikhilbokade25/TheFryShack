import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero';
import About from './Components/About';
import Products from './Components/Products';

function App() {
  return (
    <div className="App">
      <Hero/>
      <About/>
      <Products/>
    </div>
  );
}

export default App;
