import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import img from '../uicompennet/me.jpg'

import MenuIcon from '@mui/icons-material/Menu';

const Appbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
   
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Typography variant="body1"  sx={{mr:'20px'}}  color="inherit">mohammadjalizi</Typography>
        <Avatar alt="Remy Sharp" src={img}/>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Appbar