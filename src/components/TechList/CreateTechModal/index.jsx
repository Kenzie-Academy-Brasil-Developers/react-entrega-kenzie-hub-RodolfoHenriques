import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { TechContext } from "../../../providers/TechContext"
import { Input } from "../../fragments/Input"
import { Select } from "../../fragments/Select"
import { StyledCreateTech } from "./styled"

export const CreateTechModal = ({ setModalOpen }) => {
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm()

    const { addTech } = useContext(TechContext)

    const submit = (formData) => (
        addTech(formData, setLoading, () => {
            setModalOpen(false)
        })
    )

    return (
        <StyledCreateTech role="dialog">
            <div className="modalBoxContainer">
                <div className="modalDiv">
                    <div className="titleDiv">
                        <h3>Cadastrar Tecnologia</h3>
                    </div>
                    <form onSubmit={handleSubmit(submit)} className="controlsDiv">
                        <Input label="Nome" type="text" id="title" placeholder="Nome da Tecnologia" register={register("title")} error={errors.title}/>
                        <Select label="Selecionar Status" id="status" register={register("status")} error={errors.course_module}>
                            <option value="">Selecionar Nível</option>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </Select>
                        <button type="submit" className="registerTech" disabled={loading}>
                            {loading ? "Cadastrando..." : "Cadastrar Tecnologia" }
                        </button>
                    </form>
                    <button className="closeButton" onClick={() => setModalOpen(false)}>X</button>
                </div>
            </div>
        </StyledCreateTech>
    )
}