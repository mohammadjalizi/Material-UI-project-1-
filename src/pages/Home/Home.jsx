import { Close } from '@mui/icons-material'
import { Box, Paper, Typography, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const[mydata,setmydata]=useState([])
  useEffect(()=>{

    fetch("http://localhost:3100/mydata")
    .then((response) => response.json())
    .then((data) => setmydata(data) )

  },[])
  console.log(mydata)
  return (
   <Box>
{mydata.map(item=>{
return(

  <Paper sx={{width:"366px",display:'flex',justifyContent:'space-between',mt:'22px',pt:'27px',position:'relative'}}>

<Typography variant="h6" > {item.title}</Typography>
<Typography variant="h6" sx={{mr:'33px',fontWeight:500,opacity:'0.7'}} > ${item.price}</Typography>
<IconButton sx={{position:'absolute',top:'0',right:'0'}}  >
  <Close sx={{fontSize:'22px'}}/>
</IconButton>

</Paper>
)

})}



   </Box>
  )
}

export default Home