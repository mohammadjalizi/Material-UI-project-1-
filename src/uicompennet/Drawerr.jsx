import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useLocation, useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { List, Button } from '@mui/material';
import { Brightness4, Brightness7, Create, Home, Logout, Person, Person2, Settings } from '@mui/icons-material';
import { useTheme } from '@emotion/react';


const Drawerr = ({drawerWidth,setMymode,noneblock,drawertype,hidedrawer}) => {
  const navigate = useNavigate();
    const theme=useTheme()
    const loaction =useLocation()
    const myList=[

      {text:'Home',icon:<Home />,path:'/'},
      {text:'Create',icon:<Create/>,path:'/Create'},
      {text:'profile',icon:<Person/>,path:'/profile'},
      {text:'settings',icon:<Settings/>,path:'/settings'},
    ]
 
  return (
    <div>
        <Drawer
        sx={{
          display:{xs:noneblock,sm:"block"},
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          
          },
          
        }}
        variant={drawertype}
        anchor="left"
        open={true}
        onClose={()=>{
        hidedrawer()

        }}
      >


        {/* <Button variant="text" color="primary">
          dark
        </Button> */}


  
       
    
   
        <List>
        <ListItem sx={{display:'flex',justifyContent:'center', mb:'14px'}} disablePadding>
        <IconButton sx={{ ml: 1 }}
 onClick={()=>{
  localStorage.setItem("currenmymode",theme.palette.mode==="dark"? "light":'dark' )
  setMymode(theme.palette.mode==="light"?"dark" : "light")
  
          }} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7 sx={{color:"orange"}} /> : <Brightness4 />}
      </IconButton>
          </ListItem>
 
          
        <Divider />

        {myList.map(item=>{

return(
  <ListItem 

  key={item.text}
  sx={{
      bgcolor:
      loaction.pathname===item.path
      ?
      theme.palette.favcolor.main
      :null,
  }} 
  
  disablePadding>
    <ListItemButton onClick={()=>{
navigate(item.path)

    }}>
      <ListItemIcon>
   {item.icon}
      </ListItemIcon>
      <ListItemText primary={item.text} />
    </ListItemButton>
  </ListItem>

)

        })}
   

     



     
      
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