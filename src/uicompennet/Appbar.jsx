import React from "react";
import { Toolbar, AppBar, Avatar, Link, Typography, IconButton } from "@mui/material";
import img from '../uicompennet/me.jpg'
import { Menu } from "@mui/icons-material";

const Appbar = ({ drawerWidth,setnoneblock }) => {
  return (
    <AppBar
      sx={{ width:{sm: `calc(100% - ${drawerWidth}px)`}, ml: {xs:0,sm:`${drawerWidth}px`} }}
      position="static"
    >
      <Toolbar>
        <IconButton onClick={()=>{

setnoneblock("block")

        }}  sx={{display:{sm:'none'}}} >
          <Menu/>
        </IconButton>
        <Link
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            "&:hover": { fontSize: "16.5px" },
          }}
          color="inherit"
          href="/"
        >
          My expenses
        </Link>

        <Typography mr={2} variant="body1" color="inherit">
          mohammadjalizi
        </Typography>

        <Avatar alt="Remy Sharp" src={img} />
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;