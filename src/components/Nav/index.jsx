import Logo from "../../assets/Logo.svg"
import { Link } from "react-router-dom"
import { StyledButtonNav, StyledNav } from "./styled"
import { toast } from "react-toastify"
import { useContext } from "react"
import { ProfileContext } from "../../providers/ProfileContext"

export const Nav = ({ button }) => {
    const { userLogout, user } = useContext(ProfileContext)

    return (
        <>
            {button ?
                (<StyledButtonNav>
                    <img src={Logo} alt="Logo KenzieHub" />
                    {user ?
                        (<button onClick={() => {
                            userLogout()
                            toast.success("Fez logout com sucesso!")
                        }}>{button}</button>) :
                        (<Link to="/">{button}</Link>)}
                </StyledButtonNav>) :
                (<StyledNav>
                    <img src={Logo} alt="Logo KenzieHub" />
                </StyledNav>)}
        </>
    )
}