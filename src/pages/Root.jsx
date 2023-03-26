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

const[noneblock,setnoneblock]=useState("none")
const[drawertype,setdrawertype]=useState("permanent")

const showdrawer=()=>{
  setnoneblock("blcock")
  setdrawertype("temporary")

}

const hidedrawer=()=>{
  setnoneblock("none")
          setdrawertype("permanent")

}
const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <div>
<Appbar drawerWidth={drawerWidth} showdrawer={showdrawer}/>
<Drawerr drawerWidth={drawerWidth} setMymode={setMymode}  noneblock={noneblock}    drawertype={drawertype} hidedrawer={hidedrawer} /    >

<Box sx={{ml:{sm:`${drawerWidth}px`},display:'flex',justifyContent:'center'}}>
<Outlet/>

</Box>


    </div>
    </ThemeProvider>

  )
}

export default Root