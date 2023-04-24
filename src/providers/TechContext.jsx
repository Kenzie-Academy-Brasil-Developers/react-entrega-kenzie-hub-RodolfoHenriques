import { createContext, useContext, useState } from "react"
import { api } from "../services/api"
import { ProfileContext } from "./ProfileContext"
import { toast } from "react-toastify"

export const TechContext = createContext({})

export const TechProvider = ({ children }) => {
    const { user } = useContext(ProfileContext)
    const [techList, setTechList] = useState(user.techs)
    const [selectedTech, setSelectedTech] = useState(null)

    const updateTech = async (formData, techId, setLoading, callback ) => {
        const token = localStorage.getItem("@TOKEN")
        try {
            setLoading(true)
            const { data } = await api.put(`/users/techs/${techId}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                } 
            })
            const updatedTech = data
            const indexOfItem = techList.indexOf(techList.find(tech => tech.id === techId))
            techList.splice(indexOfItem, 1, updatedTech)
            toast.success("Tecnologia Atualizada!")
            if (callback) {
                await callback();
            }
        } catch (error) {
            toast.error("Ops! Algo deu errado!")
        } finally {
            setLoading(false)
        }
    }

    const removeTech = async ( techId, setLoading, callback ) => {
        const token = localStorage.getItem("@TOKEN")
        try {
            setLoading(true)
            const { data } = await api.delete(`/users/techs/${techId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                } 
            })
            const newTechList = techList.filter(tech => tech.id !== techId)
            toast.success("Tecnologia Excluída!")
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
        <TechContext.Provider value={{ techList, setTechList, addTech, setSelectedTech, selectedTech, removeTech, updateTech }}>
            {children}
        </TechContext.Provider>
    )
}