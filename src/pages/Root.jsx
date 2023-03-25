import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Appbar from '../uicompennet/Appbar'
import Drawerr from '../uicompennet/Drawerr'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { purple,teal } from '@mui/material/colors';
import { useState } from "react";

const drawerWidth=240
const Root = () => {
  const [mymode,setMymode]=useState("dark")
  const darkTheme = createTheme({
    palette: {
      mode: mymode,
      primary:{main:teal[500]}
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <div>
<Appbar drawerWidth={drawerWidth}/>
<Drawerr drawerWidth={drawerWidth} setMymode={setMymode}/>

<Box sx={{ml:`${drawerWidth}px`,display:'flex',justifyContent:'center'}}>
<Outlet/>

</Box>


    </div>
    </ThemeProvider>

  )
}

export default Root