import {Request, Response} from "express"
import { DataStudents } from "../data/DataStudent"
import { StudentModel } from "../model/EstudanteModel"

export const postStudent = async (req: Request, res: Response) => {
    try{
        
        const {nome, email, data_nasc, turma_id}= req.body
        
        const newDate = data_nasc.substr(0, 10).split('/').reverse().join('-')
        
        const id:string = Math.floor(Date.now() * Math.random()).toString(36)

        if (nome !== String(nome) || email !== String(email) || data_nasc !== String(data_nasc) || id !== String(id) || turma_id !== String(turma_id)) {
            throw new Error("Valores invalidos!")
        }
    
        if (!nome || !email || !data_nasc || !id || !turma_id) {
            throw new Error("Campo vazio!")
        }

        const students = new StudentModel(id, nome, email, newDate, turma_id)

        const studentDB = new DataStudents()

        await studentDB.insertStudents(students)

        res.status(201).end("Estudante Criado com Sucesso!")
    }catch(error:any){
        res.status(400).send(error.message)
    }
}