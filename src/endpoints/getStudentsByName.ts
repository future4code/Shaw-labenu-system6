import { Request, Response } from "express"
import { DataStudents } from "../data/DataStudent"

export const getStudentsByName = async (req: Request, res: Response) => {
    try {

        const nome: any = req.params.nome

        // if(!nome){
        //     throw new Error("Nome não encontrado")
        // }
        const studentDB = new DataStudents()

        const students = await studentDB.selctStudents(nome)

        console.log(nome)
        res.send(students)

    } catch (error: any) {
        res.status(500).send(error.message)
    }
} 