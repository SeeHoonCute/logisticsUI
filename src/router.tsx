import { RouteObject } from "react-router-dom";
import { Frame } from "./frame";
import LogIn from "./pages/LogIn";
import ProtectedRoute from "./router/ProtectedRoute";

export enum UserRole {
    USER = "user",
    ADMIN = "admin"
}

export const routes: RouteObject[] = [
    {
        path: "",
        element: <ProtectedRoute role={[UserRole.USER]} />,
        children: [
            {
                path: "",
                element: <Frame />,
            }
        ]
    },
    {
        path: "/login",
        element: <LogIn />,
    },
];
