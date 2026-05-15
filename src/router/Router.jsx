import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import PlantsDetails from "../pages/Plants/PlantsDetails";

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
                
            
         }
        ]
    }
])