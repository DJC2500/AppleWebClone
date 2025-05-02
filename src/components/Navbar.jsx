import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppleIcon from '@mui/icons-material/Apple';
import SearchIcon from '@mui/icons-material/Search';
import WorkOutlineTwoToneIcon from '@mui/icons-material/WorkOutlineTwoTone';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: 'white', color: 'black' }} >
      
      <Toolbar onMouseLeave={handleMouseLeave}>
        <Typography variant="h6" sx={{ flexGrow: 0.7,  }} />
        <AppleIcon sx={{ mr: 3}} />
       
<div onMouseEnter={handleMouseEnter}>
          <Button
            color="inherit"
           
            aria-controls={Boolean(anchorEl) ? 'hover-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={Boolean(anchorEl) ? 'true' : undefined}
            sx={{ textTransform: 'none', mr: 1 }}
          >
            Store
          </Button>
          <Menu
            id="hover-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            MenuListProps={{
              onMouseEnter: handleMouseEnter,
              onMouseLeave: handleMouseLeave,
            }}
          >
            <MenuItem onClick={handleMouseLeave}  sx={{ fontSize: '12px' }}>Shop</MenuItem>
            <MenuItem onClick={handleMouseLeave} sx={{ color: 'black', fontWeight: 'bold', fontSize: '24px'}} >Shop the Latest</MenuItem>
            <MenuItem onClick={handleMouseLeave} sx={{ color: 'black', fontWeight: 'bold', fontSize: '24px'}} >Mac</MenuItem>
            <MenuItem onClick={handleMouseLeave}sx={{ color: 'black', fontWeight: 'bold',fontSize: '24px'}}>iPad</MenuItem>
            <MenuItem onClick={handleMouseLeave} sx={{ color: 'black', fontWeight: 'bold', fontSize: '24px'}}>iPhone</MenuItem>
            <MenuItem onClick={handleMouseLeave} sx={{ color: 'black', fontWeight: 'bold',fontSize: '24px'}}>Apple Watch</MenuItem>
            <MenuItem onClick={handleMouseLeave} sx={{ color: 'black', fontWeight: 'bold',fontSize: '24px'}}>Apple Vision Pro</MenuItem>
            <MenuItem onClick={handleMouseLeave} sx={{ color: 'black', fontWeight: 'bold',fontSize: '24px'}}>Accessories</MenuItem>
          </Menu>
        </div>
        <Button color="inherit" sx={{ textTransform: 'none' , mr: 1  }}>Mac</Button>
        <Button color="inherit" sx={{ textTransform: 'none' , mr: 1  }}>iPad</Button>
        <Button color="inherit" sx={{ textTransform: 'none' , mr: 1 }}>iPhone</Button>
        <Button color="inherit" sx={{ textTransform: 'none' , mr: 1 }}>Watch</Button>
        <Button color="inherit" sx={{ textTransform: 'none', mr: 1  }}>Vision</Button>
        <Button color="inherit" sx={{ textTransform: 'none' , mr: 1 }}>AirPods</Button>
        <Button color="inherit" sx={{ textTransform: 'none' , mr: 1 }}>TV & Home</Button>
        <Button color="inherit" sx={{ textTransform: 'none' , mr: 1 }}>Entertainment</Button>
        <Button color="inherit" sx={{ textTransform: 'none', mr: 1 }}>Accessories</Button>
        <Button color="inherit" sx={{ textTransform: 'none', mr: 4 }}>Support</Button>
        <SearchIcon sx={{ mr: 4 }} />
        <WorkOutlineTwoToneIcon sx={{ mr: 3 }} />
      </Toolbar>
    </AppBar>
  );
}
