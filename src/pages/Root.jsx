import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Appbar from '../uicompennet/Appbar'
import Drawerr from '../uicompennet/Drawerr'
const drawerWidth=240
const Root = () => {
  return (
    <div>
<Appbar drawerWidth={drawerWidth}/>
<Drawerr drawerWidth={drawerWidth}/>
<Box sx={{ml:`${drawerWidth}px`,display:'flex',justifyContent:'center'}}>
<Outlet/>

</Box>


    </div>
  )
}

export default Root