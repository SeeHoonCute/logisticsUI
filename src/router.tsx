import { RouteObject } from "react-router-dom";
import { Frame } from "./frame";
import LogIn from "./pages/LogIn";
import Table from "./components/Table/Table"
import ApproverTable from "./components/Table/ApproverTable";

// export enum UserRole {
//     USER = "user",
//     ADMIN = "admin"
// }

export const routes: RouteObject[] = [
    {
        path: "",
        element:<Frame/>,
        // element: <ProtectedRoute role={[UserRole.USER]} />,
        children: [
            {
                path: "",
                element: <Table />,
            },
            {
                path:"/shippingUnit",
                element: <ApproverTable/>,
            }
        ]
    },
    {
        path: "/login",
        element: <LogIn />,
    },
];
