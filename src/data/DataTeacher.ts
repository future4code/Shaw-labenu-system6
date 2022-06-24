import { DocenteModel } from "../model/DocenteModel";
import { DataBase } from "./DataBase";

export class DataTeacher extends DataBase{

    public async selctAllTeachers(){
        try{
            const result = await DataBase.connection("docente")
            .select("*")
            return result
        }catch (error:any){
            throw new Error("Erro inesperado no servidor")
        }
    }

    public async insertTeacher(teacher: DocenteModel){
        try{
                       
            await DataBase.connection("docente")
            .insert({
                id:teacher.getId(),
                nome: teacher.getNome(),
                email:teacher.getEmail(),
                data_nasc: teacher.getDataNasc(),
                turma_id: teacher.getTurmaId()
            })
            
        }catch (error:any){
            throw new Error("Erro inesperado no servidor")
        }
    }

    public async updateClassTeacher(turma_id: string, id:string){
    
        try{
            await DataBase.connection("docente")
            .where({id: id})
            .update({turma_id: turma_id})
                       
        }catch(error:any){
             throw new Error(error.message)
        }
    }
}