import { Request, Response } from "express"
import { DataStudents } from "../data/DataStudent"

export const getStudentsByName = async (req: Request, res: Response) => {
    try {

        const nome: string = req.params.nome

        const studentDB = new DataStudents()

        const students = await studentDB.selctStudents(nome)

        if(students.length === 0){
            throw new Error("Nome não encontrado")
        }

        // if(nome !== String(nome)){
        //     throw new Error("Valor invalido")
        // }

        res.send(students)

    } catch (error: any) {
        res.status(500).send(error.message)
    }
} 