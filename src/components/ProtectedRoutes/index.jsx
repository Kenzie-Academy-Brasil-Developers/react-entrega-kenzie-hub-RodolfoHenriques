import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { ProfileContext } from "../../providers/ProfileContext"


export const ProtectedRoutes = () => {
    const { user, loading } = useContext(ProfileContext)
    if (loading) {
        return (
            <div className="loading">
                <h3>Carregando...</h3>
            </div>
        )
    }

    if (!user) {
        return <Navigate to="/" />
    }

    return (

        <Outlet />

    )
}