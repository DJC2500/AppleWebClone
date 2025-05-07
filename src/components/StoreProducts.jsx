import React from 'react';
import ProductGrid from './ProductGrid'; // Adjust path as needed
import storeProducts from '../data/storeProducts'; // Import the store products data
// import StoreCard from './StoreCard';
// import storeProducts from '../data/storeProducts';

const StoreProducts = () => {
  return (
    <div className="store-products-container">
      <h2>Store. The best way to buy the products you love.</h2>
      <ProductGrid
  products={storeProducts}
  cardProps={{ width: 250, height: 280 }}
/>

    </div>
  );
};

export default StoreProducts;
