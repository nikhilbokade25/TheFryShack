import './App.css';
import Hero from './Components/Hero';
import About from './Components/About';
import Products from './Components/Products';
import Events from './Components/Events';
import Subscribe from './Components/Subscribe';
import Footer from './Components/Footer';
import Menu from './Components/Menu';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Events />
      <Subscribe />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
