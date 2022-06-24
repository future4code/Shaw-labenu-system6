import {Request, Response} from "express"
import { DataTeacher } from "../data/DataTeacher"
import { DocenteModel } from "../model/DocenteModel"

export const postTeacher = async (req: Request, res: Response) => {
    try{
        
        const {nome, email, data_nasc, turma_id}= req.body
        
        const newDate = data_nasc.substr(0, 10).split('/').reverse().join('-')
        
        const id:string = Math.floor(Date.now() * Math.random()).toString(36)

        if (nome !== String(nome) || email !== String(email) || data_nasc !== String(data_nasc) || id !== String(id) || turma_id !== String(turma_id)) {
            res.status(406)
            throw new Error("Valores invalidos!")
        }
    
        if (!nome || !email || !data_nasc || !id || !turma_id) {
            res.status(400)
            throw new Error("Campo vazio")
        }

        const teacher = new DocenteModel(id, nome, email, newDate, turma_id)

        const teacherDB = new DataTeacher()

        await teacherDB.insertTeacher(teacher)

        res.status(201).end("OK")

    }catch(error:any){
        res.send(error.message)
    }
}