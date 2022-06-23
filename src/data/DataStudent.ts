import { StudentModel } from "../model/EstudanteModel";
import { updateClassModel } from "../model/UpdateTurmaModel";
import { DataBase } from "./DataBase";

export class DataStudents extends DataBase{

    public async selctStudents(nome:string){
        try{
            const result = await DataBase.connection("estudante")
            .select("*")
            .where('nome', 'like', `${nome}`)

            return result
        }catch (error:any){
            throw new Error("Erro inesperado no servidor")
        }
    }

    public async insertStudents(student: StudentModel){
        try{
                       
            await DataBase.connection("estudante")
            .insert({
                id: student.getId(),
                nome: student.getNome(),
                email:student.getEmail(),
                data_nasc: student.getDataNasc(),
                turma_id: student.getTurmaId()
            })
            
        }catch (error:any){
            throw new Error("Erro inesperado no servidor")
        }
    }

    public async updateClass(turma_id: string, id:string){
        try{
            await DataBase.connection(`estudante`)
            .update({turma_id: turma_id})
            .where("id", id)

        }catch(error:any){
             throw new Error(error.sqlMessage)
        }
    }
}