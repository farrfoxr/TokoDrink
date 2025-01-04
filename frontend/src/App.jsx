import React from 'react';
import Navbar from './components/Navbar.jsx';
import Banner from './components/Banner.jsx';
import CardGrid from './components/CardGrid.jsx';
import Carousel from './components/Carousel.jsx';
import Footer from './components/Footer.jsx';
import { AdminProvider } from './AdminContext.jsx';
import { CardProvider } from './components/CardContext.jsx';  // Add this import
import './App.css';

function App() {
  return (
    <AdminProvider>
      <CardProvider>  {/* Add CardProvider here */}
        <div className="App">
          <div id="top"></div>
          <Navbar />
          <Banner />
          <div id="locations">
            <CardGrid />
          </div>
          <div id="promos">
            <Carousel />
          </div>
          <Footer />
        </div>
      </CardProvider>
    </AdminProvider>
  );
}

export default App;