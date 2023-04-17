import { useContext, useState } from "react"
import { ProfileContext } from "../../providers/ProfileContext"
import { CreateTechModal } from "./CreateTechModal"
import { StyledTechList, StyledTechTitle } from "./styled"
import { TechCard } from "./TechCard"

export const TechList = () => {
    const { user } = useContext(ProfileContext)
    const [ ModalOpen, setModalOpen] = useState(false)

    return (
        <>
            <StyledTechTitle>
                <h3>Tecnologias</h3>
                <button onClick={() => setModalOpen(true)}>+</button>
                {ModalOpen ? (
                  <CreateTechModal setModalOpen={setModalOpen}/>
               ) : null}
            </StyledTechTitle>
            <StyledTechList>
                {user.techs.length === 0 ? (<p className="emptyTechs">O usuário ainda não possui tecnologias cadastradas...</p>) : null}
                {user.techs.map((tech) => {
                    return <TechCard key={tech.title} tech={tech}/>
                })}
                <TechCard/>
            </StyledTechList>
        </>
    )
}