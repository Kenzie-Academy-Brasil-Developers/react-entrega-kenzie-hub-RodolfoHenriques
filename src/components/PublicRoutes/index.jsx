import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ProfileContext } from "../../providers/ProfileContext";

export const PublicRoutes = () => {
    const { user } = useContext(ProfileContext)

    return !user ? <Outlet/> : <Navigate to="/user"/>
}