import {Request, Response} from "express"
import { DataStudents } from "../data/DataStudent"

export const putStudentsClass = async (req: Request, res: Response) => {
    try{
        const {turma_id}= req.body

        const id = req.params.id

        if(turma_id.length === 0 || id.length === 0){
            throw new Error("Campo vazio")
        }

        if(!turma_id || !id){
            throw new Error("ID não encontrado")
        }

        if (turma_id !== String(turma_id) || id !== String(id)) {
            throw new Error("Valores invalidos!")
        }
        
        const studentDB = new DataStudents()

        await studentDB.updateClass(turma_id, id)

        res.status(202).end("Estudante Foi alterado de turma com sucesso")

    }catch(error:any){
        res.status(400).send(error.message)
    }
}