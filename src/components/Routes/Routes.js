import { createBrowserRouter } from "react-router-dom";
import AboutUS from "../AboutUS/AboutUS";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import PostDetails from "../PostDetails/PostDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/details/:id',
                loader: ({ params }) => fetch(`https://dummyapi.io/data/v1/post/${params.id}`, {
                    headers: {
                        "content-type": "application/json",
                        "app-id": "63e4cdd09eb781424646ebe7"
                    }
                }),
                element: <PostDetails></PostDetails>
            },
            {
                path: '/aboutUs',
                element: <AboutUS></AboutUS>
            },
        ]
    }
])