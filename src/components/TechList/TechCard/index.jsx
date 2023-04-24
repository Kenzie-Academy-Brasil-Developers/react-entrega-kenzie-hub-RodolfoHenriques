import { useContext } from "react"
import { TechContext } from "../../../providers/TechContext"
import { StyledTechCard } from "./styled"

export const TechCard = ({ tech, setViewOpen }) => {
    const { setSelectedTech } = useContext(TechContext)
    return (
        <StyledTechCard onClick={() => {
            setViewOpen(true)
            setSelectedTech(tech)
        }
        } role="button">
            <span>{tech.title}</span>
            <p>{tech.status}</p>
        </StyledTechCard>
    )
}