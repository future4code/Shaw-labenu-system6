import {Request, Response} from "express"
import { DataStudents } from "../data/DataStudent"

export const putStudentsClass = async (req: Request, res: Response) => {
    try{
        const {turma_id}= req.body

        const id = req.params.id

        if(turma_id.length === 0 || id.length === 0){
            res.status(400)
            throw new Error("Campo vazio")
        }

        if(!turma_id || !id){
            res.status(404)
            throw new Error("ID não encontrado")
        }

        if (turma_id !== String(turma_id) || id !== String(id)) {
            res.status(406)
            throw new Error("Valores invalidos!")
        }
        
        const studentDB = new DataStudents()

        await studentDB.updateClass(turma_id, id)

        res.status(202).end("OK")

    }catch(error:any){
        res.send(error.message)
    }
}