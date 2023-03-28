import { Close } from '@mui/icons-material'
import { Box, Paper, Typography, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const[mydata,setmydata]=useState([])
  useEffect(()=>{

    fetch("http://localhost:3100/mydata")
    .then((response) => response.json())
    .then((data) => setmydata(data) )

  },[mydata])


let totalprice=0;

  return (
   <Box>
{mydata.map(item=>{
  totalprice+=item.price
return(

  <Paper
  
  key={item.id}   sx={{width:"366px",display:'flex',justifyContent:'space-between',   mt:'22px',pt:'27px',position:'relative'}}>

<Typography sx={{mb:"10px"}} variant="h6" > {item.title}</Typography>
<Typography variant="h6" sx={{mr:'33px',fontWeight:500,opacity:'0.7'}} > ${item.price}</Typography>
<IconButton onClick={()=>{
fetch(`http://localhost:3100/mydata/${item.id}`,{method: "DELETE"})

}} sx={{position:'absolute',top:'0',right:'0'}}  >
  <Close sx={{fontSize:'22px'}}/>
</IconButton>

</Paper>
) 

})}

<Typography  mt='55px'  textAlign="center"   variant="h6" > 👉You Spend ${totalprice} </Typography>

   </Box>
  )
}

export default Home