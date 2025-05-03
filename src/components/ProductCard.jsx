import React from 'react';
import { Card, CardMedia, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const ProductCard = ({ title, image }) => {
  return (
    <Card
      sx={{
        width: 350,
        flex: '0 0 auto',
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
        },
        position: 'relative',
        mx: 3,
        my: 3,
        // borderRadius: 5,
      }}
    >
      <CardMedia
        component="img"
        height="400"
        image={`/images/${image}`}
        alt={title}
        sx={{ borderRadius: '12px' }}
      />
      {/* <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="subtitle1">{title}</Typography>
       
      </CardContent> */}
    </Card>
    
  );
};
<IconButton>
<ArrowForwardIosIcon fontSize="small" />
</IconButton>
export default ProductCard;

// import React from 'react';
// import { Card, CardMedia, CardContent, Typography } from '@mui/material';

// const ProductCard = ({ title, image }) => {
//   return (
//     <Card
//       sx={{
//         width: 350,
//         flex: '0 0 auto',
//         transition: 'transform 0.3s',
//         '&:hover': {
//           transform: 'scale(1.05)',
//         },
//         mx: 3,
//       }}
//     >
//       <CardMedia
//         component="img"
//         height="300"
//         image={`pd1.jpg`}
//         alt={title}
//       />
//       <CardContent>
//         <Typography variant="subtitle1" align="center">{title}</Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default ProductCard;
