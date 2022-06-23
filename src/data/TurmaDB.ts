import BaseDatabase from "./BaseDatabase";
import TurmaModel from "../model/TurmaModel";

export class TurmaDataBase extends BaseDatabase{
    public async getAll(){
        try {
            const result = await BaseDatabase.connection(`
            SELECT * FROM turma WHERE modulo <> 0`)
            console.log(result[0])
            return result 
        } catch (error:any) {
            throw new Error("Erro Inesperado")
        }
    }

    public async insert(turma : TurmaModel){
        try {
            await BaseDatabase.connection(`turma`)
            .insert({
                id: turma.getIdTurma(),
                nome: turma.getNomeTurma(),
                modulo: turma.getModuloTurma()
            })
            
        } catch (error:any) {
            throw new Error ("Error Inesperado")
            
        }
    }
}