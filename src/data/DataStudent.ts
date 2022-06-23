import { StudentModel } from "../model/EstudanteModel";
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
}