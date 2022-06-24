import { Request, Response } from "express";
import TurmaModel from "../model/TurmaModel";
import { TurmaDataBase } from "../data/TurmaDB";

export default async function createTurma(req: Request, res: Response): Promise<void> {
    try {
        const { id, nome, modulo } = req.body

        if(id !== String(id) || nome !== String(nome) ||modulo !== String(modulo)){
            throw new Error("Dados em falta para criação da Turma!")
        }

        const turma = new TurmaModel(id, nome, modulo)

        const turmaDb = new TurmaDataBase()

        await turmaDb.insert(turma)

        res.status(201).end("Criado Turma")

    } catch (error: any) {
        switch (error.message) {
            case "Dados em falta para criação da Turma!":
                res.status(400)
                break;
        
            default:
                res.status(500).end()
                break;
        }
        res.send(error.message)

    }
}