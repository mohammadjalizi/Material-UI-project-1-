import React from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import { ChevronRight } from '@mui/icons-material';
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor:theme.palette.primary.main,
  '&:hover': {
    backgroundColor: purple[700],
  },
}));
const Creact = () => {
  return (
    <Box sx={{width:'366px'}} component="form" >   
    <TextField
fullWidth={true}
    label="transtitile"
   
    sx={{    m: 1, mt: '22px' }}
    InputProps={{
      startAdornment: <InputAdornment position="start">👉</InputAdornment>,
    }}
    variant="filled"
  />
  <br/>
  <TextField
  fullWidth={true}
    label="transtitile"

    sx={{ m: 1, mt: '22px',  }}
    InputProps={{
      startAdornment: <InputAdornment position="start">$</InputAdornment>,
    }}
    variant="filled"
  />
  <br/>
 <ColorButton sx={{mt:'22px'}} variant="contained">
 submit <ChevronRight/>
 
 </ColorButton>

    </Box>
  )
}

export default Creact