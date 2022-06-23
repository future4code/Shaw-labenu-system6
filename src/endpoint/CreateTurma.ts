import { Request,Response } from "express";
import TurmaModel from "../model/TurmaModel";
import { TurmaDataBase } from "../data/TurmaDB";

export default async function createTurma(req:Request, res:Response):Promise<void>{
    try {
        const {id,nome,modulo} = req.body
        
        const turma = new TurmaModel(id,nome,modulo)

        const turmaDb = new TurmaDataBase()

        await turmaDb.insert(turma)
        
        res.status(201).end()

    } catch (error:any) {

        res.status(500).end()
        
    }
}