import { Request, Response } from "express"
import { DataTeacher } from "../data/DataTeacher"

export const getAllTeachers = async (req: Request, res: Response) => {
    try {

        const teacherDB = new DataTeacher()

        const theacher = await teacherDB.selctAllTeachers()

        if(theacher.length === 0){
            throw new Error("Professor não encontrado")
        }

        res.send(theacher)

    } catch (error: any) {
        res.status(500).send(error.message)
    }
}