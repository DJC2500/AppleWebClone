import React from 'react';
import ProductGrid from './ProductGrid'; // Adjust path as needed
import latestProducts from '../data/latestProducts'; // Import the latest products data

const LatestProducts = () => {
  return (
    <div className="latest-products-container">
      <h2>The latest. Take a look at what’s new right now.</h2>
      <ProductGrid products={latestProducts} /> 
      cardProps={{ width: 300, height: 350 }}
    </div>
  );
};

export default LatestProducts;
