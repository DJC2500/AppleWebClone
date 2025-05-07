import React from 'react';
import ProductGrid from './ProductGrid'; // Adjust path
import accessories from '../data/accessories'; // Import the accessories data
import ProductCard from '../components/ProductCard';

const Accessories = () => {
  return (
    <div className="accessories-container">
      <h2>Accessories. Put a bow on Mother’s Day.</h2>
      <ProductGrid products={accessories} />
      cardProps={{ width: 300, height: 350 }}
    </div>
  );
};

export default Accessories;
