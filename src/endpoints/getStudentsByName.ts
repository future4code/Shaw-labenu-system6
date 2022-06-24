import { Request, Response } from "express"
import { DataStudents } from "../data/DataStudent"

export const getStudentsByName = async (req: Request, res: Response) => {
    try {

        const nome:string = req.params.nome

        const studentDB = new DataStudents()

        const students = await studentDB.selctStudents(nome)

        if(students.length === 0){
            throw new Error("Nome não encontrado")
        }

        res.send(students)

    } catch (error: any) {
        res.send(error.message)
    }
} 