import { Request, Response } from "express"
import { DataTeacher } from "../data/DataTeacher"

export const getAllTeachers = async (req: Request, res: Response) => {
    try {

        const teacherDB = new DataTeacher()

        const theacher = await teacherDB.selctAllTeachers()

        if(theacher.length === 0){
            res.status(404)
            throw new Error("Professores não encontrados")
        }

        res.send(theacher)

    } catch (error: any) {
        res.send(error.message)
    }
}