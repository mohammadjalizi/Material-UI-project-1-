import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Creact from "./pages/Creact/Creact";
import Home from "./pages/Home/Home";
import Root from "./pages/Root";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { purple,teal } from '@mui/material/colors';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="create" element={<Creact />} />

      {/* ... etc. */}
    </Route>
  )
);


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary:{main:teal[500]}
  },
});

function App() {
  return  ( 
    <ThemeProvider theme={darkTheme}>
            <CssBaseline />

     <RouterProvider router={router} />  
     </ThemeProvider>
     
     )

   
  
  

}

export default App;