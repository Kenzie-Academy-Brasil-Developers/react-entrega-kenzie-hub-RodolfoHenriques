import { StyledTechCard } from "./styled"

export const TechCard = ({ tech }) => {

    return (
        <StyledTechCard>
            <span>{tech.title}</span>
            <p>{tech.status}</p>
        </StyledTechCard>
    )
}