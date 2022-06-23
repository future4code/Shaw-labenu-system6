import { Request, Response } from "express";
import { TurmaDataBase } from "../data/TurmaDB";


export async function updateModulo(req: Request, res: Response) {
    try {
        const { id } = req.params
        const { modulo } = req.body

        const update = new TurmaDataBase()
        await update.update(modulo, id)
        res.status(202).send("Módulo Foi atualizado!")

    } catch (error: any) {
        res.status(500).end("Error No Atualização do módulo")

    }

}

export default updateModulo