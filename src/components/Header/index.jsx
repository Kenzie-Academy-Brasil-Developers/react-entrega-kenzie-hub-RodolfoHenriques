import { useContext } from "react"
import { ProfileContext } from "../../providers/ProfileContext"
import { StyledHeader } from "./styled"

export const Header = () => {
    const { user } = useContext(ProfileContext)
    return (
        <StyledHeader>
                <h1>Olá, {user.name}</h1>
                <span>{user.course_module}</span>
        </StyledHeader>
    )
}