import { Request, Response } from "express";
import { TurmaDataBase } from "../data/TurmaDB";


export async function updateModulo(req: Request, res: Response) {
    try {
        const { id } = req.params
        const { modulo } = req.body

        if (!id || !modulo) {
            throw new Error("Dados em falta para atualizar o modulo!")
        }

        const update = new TurmaDataBase()
        await update.update(modulo, id)
        res.status(202).send("Módulo Foi atualizado!")

    } catch (error: any) {
        switch (error.message) {
            case "Dados em falta para atualizar o modulo!":
                break;
            default:
                res.status(500).end("Error No Atualização do módulo")
                break;
        }
        res.send(error.message)

    }

}

export default updateModulo