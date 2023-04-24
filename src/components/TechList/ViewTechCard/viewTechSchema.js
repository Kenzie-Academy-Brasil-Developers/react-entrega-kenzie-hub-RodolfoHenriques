import { z } from "zod"

export const viewTechSchema = z.object({
    status: z.string().nonempty("Selecione o módulo"),
})