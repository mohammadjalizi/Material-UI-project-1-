import { Close } from '@mui/icons-material'
import { Box, Paper, Typography, IconButton } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
   <Box>

<Paper sx={{width:"366px",display:'flex',justifyContent:'space-between',mt:'22px',pt:'27px',position:'relative'}}>

<Typography variant="h6" > GYM</Typography>
<Typography variant="h6" sx={{mr:'33px',fontWeight:500,opacity:'0.7'}} > $100</Typography>
<IconButton sx={{position:'absolute',top:'0',right:'0'}}  >
  <Close sx={{fontSize:'22px'}}/>
</IconButton>

</Paper>


   </Box>
  )
}

export default Home