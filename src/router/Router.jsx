import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import PlantsDetails from "../pages/Plants/PlantsDetails";
import SignUp from "../component/SignUp";
import SignIn from "../component/SignIn";

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
                Component:PlantsDetails
                
             },
             {
                path:'/signUp',
                Component: SignUp

             },
               {
                path: '/signIn',
                Component: SignIn
               }
        ]
    }
])