import { Request, Response } from "express"
import { DataStudents } from "../data/DataStudent"

export const getAllStudents = async (req: Request, res: Response) => {
    try {

        const studentDB = new DataStudents()

        const students = await studentDB.selctAllStudents()

        if(students.length === 0){
            res.status(402)
            throw new Error("Estudante não encontrado")
        }

        res.send(students)

    } catch (error: any) {
        res.send(error.message)

    }
}