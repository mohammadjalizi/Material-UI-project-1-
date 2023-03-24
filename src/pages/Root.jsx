import React from 'react'
import { Outlet } from 'react-router-dom'
import Appbar from '../uicompennet/Appbar'
const Root = () => {
  return (
    <div>
<Appbar/>

<Outlet/>

    </div>
  )
}

export default Root