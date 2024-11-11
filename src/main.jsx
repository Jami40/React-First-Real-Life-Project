import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Components/Home';
import Login from './Login';
import Register from './Components/Register';
import AuthProviders from './Providers/AuthProviders';
import Orders from './Components/Orders';
import PrivateRoutes from './Components/Routes/PrivateRoutes';
import Propile from './Components/Propile';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"login",
        element:<Login></Login>
      },
      {
        path:"register",
        element:<Register></Register>
      },
      {
        path:"order",
        element:<PrivateRoutes><Orders></Orders></PrivateRoutes>
      },
      {
        path:"propile",
        element:<PrivateRoutes><Propile></Propile></PrivateRoutes>
      }
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </StrictMode>,
)
