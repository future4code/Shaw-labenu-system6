import {Request, Response} from "express"

export const postStudent = async (req: Request, res: Response) => {
    try{
        const {nome, email, data_nasc, turma_id} = req.body
        const id = Date.now().toString()

        const student = new 
    }catch (error:any){

    }
}