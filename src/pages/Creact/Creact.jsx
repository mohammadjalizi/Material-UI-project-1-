import React from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { Box } from '@mui/material';
const Creact = () => {
  return (
    <Box sx={{width:'366px'}} component="form">   
    <TextField
  
    label="transtitile"
   
    sx={{   width:'full', m: 1, mt: '22px' }}
    InputProps={{
      startAdornment: <InputAdornment position="start">👉</InputAdornment>,
    }}
    variant="filled"
  />
  <br/>
  <TextField
    label="transtitile"

    sx={{ m: 1, mt: '22px' }}
    InputProps={{
      startAdornment: <InputAdornment position="start">kg</InputAdornment>,
    }}
    variant="filled"
  />


    </Box>
  )
}

export default Creact