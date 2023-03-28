import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

import { purple } from "@mui/material/colors";
import { ChevronRight } from "@mui/icons-material";
import { Navigate, useNavigate } from "react-router-dom";
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: theme.palette.ali.main,
  "&:hover": {
    backgroundColor: purple[700],
  },
}));
const Creact = () => {
  const [title, settilte] = useState("");
  const [price, setprice] = useState(0);
   const navigate=useNavigate()
  return (
    <Box sx={{ width: "366px" }} component="form">
      <TextField
           autoComplete="off"
        onChange={(eo) => {
          settilte(eo.target.value);
          console.log(setprice)
        }}
        fullWidth={true}
        label="transtitile"
        sx={{ m: 1, mt: "22px" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">👉</InputAdornment>,
        }}
        variant="filled"
      />
      <br />
      <TextField
          autoComplete="off"
        onChange={(eo) => {
          setprice(Number(eo.target.value));
        }}
        fullWidth={true}
        label="transtitile"
        sx={{ m: 1, mt: "22px" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />
      <br />
      <ColorButton
        onClick={() => {
          fetch("http://localhost:3100/mydata", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({price, title}),
          }).then(()=>{

            navigate("/")
          })
        }}
        sx={{ mt: "22px" }}
        variant="contained"
      >
        submit <ChevronRight />
      </ColorButton>
    </Box>
  );
};

export default Creact;
