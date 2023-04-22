import { createContext, useContext, useState } from "react"
import { api } from "../services/api"
import { ProfileContext } from "./ProfileContext"
import { toast } from "react-toastify"

export const TechContext = createContext({})

export const TechProvider = ({ children }) => {
    const { user } = useContext(ProfileContext)
    const [techList, setTechList] = useState(user.techs)

    const addTech = async (formData, setLoading, callback) => {
        const token = localStorage.getItem("@TOKEN")
        try {
            setLoading(true)
            const { data } = await api.post("/users/techs", formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const newTechList = [...techList, data]
            toast.success("Tecnologia cadastrada com sucesso!")
            setTechList(newTechList)
            if (callback) {
                await callback();
            }
        } catch (error) {
            toast.error("Ops! Algo deu errado!")
        } finally {
            setLoading(false)
        }
    }

    return (
        <TechContext.Provider value={{ techList, setTechList, addTech }}>
            {children}
        </TechContext.Provider>
    )
}