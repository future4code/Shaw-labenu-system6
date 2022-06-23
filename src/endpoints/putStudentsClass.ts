import {Request, Response} from "express"
import { DataStudents } from "../data/DataStudent"

export const putStudentsClass = async (req: Request, res: Response) => {
    try{
        const {turma_id}= req.body

        const id = req.params.id

        const studentDB = new DataStudents()

        await studentDB.updateClass(id, turma_id)

        res.status(202).end("OK")

    }catch(error:any){
        res.status(400).send(error.message)
    }
}