import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Home></Home>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
        ]
    }
])