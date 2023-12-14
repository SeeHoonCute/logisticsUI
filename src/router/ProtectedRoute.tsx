import { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router";
//import authService from "../../services/authService";

type ProtectedRouteProps = {
    role: string[]
}

const ProtectedRoute = ({ role }: ProtectedRouteProps) => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    useEffect(() => {
        handleGetMe()
    }, [])

    const handleGetMe = async () => {
        try {
            // const result= await authService.getMe()
            let result = {
                role: "user"
            };
            console.log(result)
            if (!result) {
                navigate("/login")
            } else
                if (!role.includes(result.role)) {
                    navigate("/login")
                }
                else {
                    setIsLoading(false)
                }
        } catch {
            navigate("/Error500")
        }
    }
    if (!localStorage["token"])
        return <Navigate to="/login" replace />
    return (isLoading ? <></> : <Outlet />)
};

export default ProtectedRoute