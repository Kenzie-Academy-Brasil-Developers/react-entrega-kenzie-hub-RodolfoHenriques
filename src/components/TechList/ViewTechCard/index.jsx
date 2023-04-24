import { zodResolver } from "@hookform/resolvers/zod"
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { TechContext } from "../../../providers/TechContext"
import { Input } from "../../fragments/Input"
import { Select } from "../../fragments/Select"
import { StyledViewTechCard } from "./styled"
import { viewTechSchema } from "./viewTechSchema"

export const ViewTechCard = ({ setViewOpen }) => {
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(viewTechSchema)
    })
    const { selectedTech, setSelectedTech, removeTech, updateTech } = useContext(TechContext)


    const submit = (formData) => (
        updateTech(formData, selectedTech.id, setLoading, () => {
            setViewOpen(false)
        })
    )


    return (
        <StyledViewTechCard role="dialog">
            <div className="modalBoxContainer">
                <div className="modalDiv">
                    <div className="titleDiv">
                        <h3>Tecnologia Detalhes</h3>
                    </div>
                    <form onSubmit={handleSubmit(submit)} className="controlsDiv">
                        <Input label="Nome" type="text" id="title" placeholder={selectedTech.title} disabled />
                        <Select label="Selecionar Status" id="status" register={register("status")} error={errors.status} >
                            <option value="">{selectedTech.status}</option>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </Select>
                        <div className="buttonsDiv">
                            <button type="submit" disabled={loading} className="changeTech">
                                {loading ? "Atualizando..." : "Salvar Alterações"}
                            </button>
                            <button type="button" disabled={loading} className="deleteTech" onClick={() => {
                                removeTech(selectedTech.id, setLoading, () => {
                                    setViewOpen(false)
                                })
                            }}>
                                {loading ? "Excluindo..." : "Excluir"}
                            </button>
                        </div>
                    </form>
                    <button className="closeButton" onClick={() => {
                        setViewOpen(false)
                        setSelectedTech(null)
                    }}>X</button>
                </div>
            </div>

        </StyledViewTechCard>
    )
}