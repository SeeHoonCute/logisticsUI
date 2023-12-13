import { RouteObject } from "react-router-dom";
import { Frame } from "./frame";
import LogIn from "./pages/LogIn";

export const routes: RouteObject[]=[
    {
        path:"",
        element: <Frame/>,
        children:[
            {
                path:"",
                element:"Home",
            }
        ]
    },
    {
        path:"/login",
        element: <LogIn/>,
    },
];
