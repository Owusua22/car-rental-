import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import "./App.css"
import Hero from './Components/Hero/Hero';
import Find from './Components/Find/Find';
import Driver from './Components/Drive/Driver';
import Luxury from './Components/Luxury/Luxury';
import Footer from './Components/Footer/Footer';
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Find />
      <Driver />
      <Luxury />
      <Footer />
    </div>
  );
}

export default App;
