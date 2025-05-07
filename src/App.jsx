import React from 'react';
import Navbar from './components/Navbar'; // Path to Navbar component
import Accessories from './components/Accessories'; // Path to the Accessories component
import LatestProducts from './components/LatestProducts'; // Path to the LatestProducts component
import StoreProducts from './components/StoreProducts'; // Path to the StoreProducts component
// import ProductGrid from './ProductGrid';


function App() {
  return (
    <div>
        <Navbar />
       <StoreProducts /> 
      <LatestProducts /> 
      <Accessories /> 
    </div>
  );
}

export default App;
