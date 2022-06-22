import { Request,Response } from "express";
import { TurmaDataBase } from "../data/TurmaDB";
import TurmaModel from "../model/TurmaModel";

export default async function getAllTurma(req:Request,res:Response):Promise<void>{
    try {
        const TurmaDb = new TurmaDataBase()

        const turma =  await TurmaDb.getAll()
        res.send(turma)

    } catch (error:any) {
        res
        
    }
    
}