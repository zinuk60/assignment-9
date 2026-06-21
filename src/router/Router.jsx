import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import PlantsDetails from "../pages/Plants/PlantsDetails";
import SignUp from "../component/SignUp";
import SignIn from "../component/SignIn";
import PrivateRoute from "../component/PrivateRoute";
import Profile from "../pages/profile/Profile";

export const router =createBrowserRouter([
    {
        path:"/",
        Component:Layout,
        children:[
             {
                path:"/",
                index:true,
                Component:Home
            },
            
         {
               
                path:'/plants/:id',
                loader:()=>fetch('/plantsData.json'),
                element: <PrivateRoute>
                             <PlantsDetails></PlantsDetails>
                         </PrivateRoute>
                
             },
             {
                path:'/signUp',
                Component: SignUp

             },
               {
                path: '/signIn',
                Component: SignIn
               }
               ,
               {
                path:'/profile',
                element:<PrivateRoute>
                       <Profile></Profile>
                </PrivateRoute>
               }
        ]
    }
])