import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import Accommodation from './Component/Accommodation';
import Luxury from './pages/Luxury/Luxury';
import Deals from './Component/Deals';
import GymZone from './Component/GymZone';
import Highlights from './Component/Highlights';
import Dining from './Component/Dining';
import Partners from './Component/Partners';
import Footer from './Component/Footer';
import ScrollTopButton from './Component/ScrollTopButton';
function App() {
  return (
    <div className="App">
      <Homepage/>
      <Accommodation/>
      <Luxury />
      <Deals/>
      <GymZone />
      <Highlights />
      <Dining />
      <Partners />
      <Footer />
      <ScrollTopButton />
    </div>
  );
}

export default App;
