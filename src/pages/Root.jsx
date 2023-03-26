import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Appbar from '../uicompennet/Appbar'
import Drawerr from '../uicompennet/Drawerr'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey, purple,teal } from '@mui/material/colors';
import { useState } from "react";

const drawerWidth=240
const Root = () => {
  const [mode,setMymode]=useState(localStorage.getItem("currenmymode")==null
  ?"light"
  :localStorage.getItem("currenmymode")=="light"
  ?"light"
:"dark"  
  )
  const darkTheme = createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
          ali:{

            main:"#647488"
          },
          favcolor:{
main:grey[300]

          }
          }
        : {
            // palette values for dark mode
            ali:{

              main:"teal"
            },
            favcolor:{
              main:grey[700]
             
              
                        }
       
        
          }),
    },
  });

const[noneblock,setnoneblock]=useState("none")
const[drawertype,setdrawertype]=useState("permanent")
const Showdrawer =()=> {

  setnoneblock("none")
  setdrawertype("permanent")

}
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <div>
<Appbar drawerWidth={drawerWidth}  Showdrawer={Showdrawer}/>
<Drawerr drawerWidth={drawerWidth} setMymode={setMymode}  noneblock={noneblock}    drawertype={drawertype} setnoneblock={setnoneblock}  setdrawertype={setdrawertype}  /    >

<Box sx={{ml:{sm:`${drawerWidth}px`},display:'flex',justifyContent:'center'}}>
<Outlet/>

</Box>


    </div>
    </ThemeProvider>

  )
}

export default Root