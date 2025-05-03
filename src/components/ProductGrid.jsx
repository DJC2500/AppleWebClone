// import React from 'react';
// import { Grid, Container } from '@mui/material';
// import ProductCard from '../components/ProductCard';

// const products = [
//   { title: 'Product 1', image: 'pd1.jpg' },
//   { title: 'Product 2', image: 'pd2.jpg' },
//   { title: 'Product 3', image: 'pd3.jpg' },
//   { title: 'Product 4', image: 'pd4.jpg' },
//   { title: 'Product 5', image: 'pd5.jpg' },
//   { title: 'Product 6', image: 'pd6.jpg' },
// ];


// const ProductGrid = () => {
//   return (
//     <Container sx={{ mt: 7 }}>
//       <Grid container spacing={5}>
//         {products.map((product, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <ProductCard title={product.title} image={product.image} />
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default ProductGrid;
import React, { useRef, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ProductCard from '../components/ProductCard';

const products = [
  { title: 'Product 1', image: 'pd1.jpg' },
  { title: 'Product 2', image: 'pd2.jpg' },
  { title: 'Product 3', image: 'pd3.jpg' },
  { title: 'Product 4', image: 'pd4.jpg' },
  { title: 'Product 5', image: 'pd5.jpg' },
  { title: 'Product 6', image: 'pd6.jpg' },
];

const ProductGrid = () => {
  const scrollRef = useRef(null);
  const [showArrows, setShowArrows] = useState(false);


  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
  };


  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mt: 7, px: 2, position: 'relative' }}
    onMouseEnter={() => setShowArrows(true)}
    onMouseLeave={() => setShowArrows(false)}>
       {showArrows && (
            <IconButton 
            onClick={scrollLeft} 
            sx={{
            position: 'absolute',
            left: 10,
            zIndex: 2,
            bgcolor: 'rgba(128,128,128,0.2)',
            '&:hover': { bgcolor: 'grey.300' },
            '&:active': {
              bgcolor: 'grey.400',
              borderRadius: '50%',
            },
          }}
        >
        <ArrowBackIosIcon />
      </IconButton>
       )}
      <Box
      ref={scrollRef}
        sx={{
          display: 'flex',
          overflowX: 'auto',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none'}, 
            flexGrow: 1,
        }}
    >
        {products.map((product, index) => (
          <ProductCard key={index} title={product.title} image={product.image} />
        ))}
      </Box>
       {showArrows && (
      <IconButton onClick={scrollRight} 
       sx={{
        position: 'absolute',
        right: 10,
        zIndex: 2,
        bgcolor: 'rgba(128,128,128,0.2)',
        '&:hover': { bgcolor: 'grey.300' },
        '&:active': {
          bgcolor: 'grey.400',
          borderRadius: '50%',
        },
      }}>
        <ArrowForwardIosIcon />
      </IconButton>
            )}
    </Box>
  );
};

export default ProductGrid;
