import { createBrowserRouter } from "react-router";
import HomeLayOut from "../LayOut/HomeLayOut";

export const router =createBrowserRouter([
    {
        path:"/",
        Component:HomeLayOut,

    }
])