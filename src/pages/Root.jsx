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
<Outlet/>

    </div>
  )
}

export default Root