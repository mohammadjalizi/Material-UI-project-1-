import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { List, Button } from '@mui/material';
import { Create, Home, Logout, Person, Person2, Settings } from '@mui/icons-material';
import { useTheme } from '@emotion/react';


const Drawerr = ({drawerWidth,setMymode}) => {
  const navigate = useNavigate();
    const theme=useTheme()
  return (
    <div>
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >


        <Button onClick={()=>{
setMymode(theme.palette.mode==="light"?"dark" : "light")

        }} variant="text" color="primary">
          dark
        </Button>
        <Toolbar />
        
  
       
    
        <Divider />
        <List>
        <ListItem disablePadding>
            <ListItemButton onClick={()=>{
navigate('/')

            }}>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>{
navigate("/Create")

            }}>  
              <ListItemIcon>
                <Create />
              </ListItemIcon>
              <ListItemText primary="Create" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={()=>{

              navigate("/Person2")
            }}>
              <ListItemIcon>
                <Person2 />
              </ListItemIcon>
              <ListItemText primary="profile" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
  
        </List>
      </Drawer>
    </div>
  )
}

export default Drawerr