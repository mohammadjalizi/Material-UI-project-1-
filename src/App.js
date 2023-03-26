import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Creact from "./pages/Creact/Creact";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound";
import Root from "./pages/Root";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="create" element={<Creact />} />
      <Route path="*" element={<NotFound />} />
      {/* ... etc. */}
    </Route>
  )
);




function App() {

  return  ( 

     <RouterProvider router={router} />  

     
     )

   
  
  

}

export default App;