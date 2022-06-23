import BaseDatabase from "./BaseDatabase";
import TurmaModel from "../model/TurmaModel";


export class TurmaDataBase extends BaseDatabase {
    public async getAll() {
        try {
            const result = await BaseDatabase.connection("turma")
                .select('*')
            console.log(result)
            return result

        } catch (error: any) {
            console.log(error.message)
        }
    }

    public async insert(turma: TurmaModel) {
        try {
            await BaseDatabase.connection(`turma`)
                .insert({
                    id: turma.getIdTurma(),
                    nome: turma.getNomeTurma(),
                    modulo: turma.getModuloTurma()
                })

        } catch (error: any) {
            throw new Error("Erro a Criação de Turma")

        }
    }


    public async update(modulo: string, id: string) {
        try {
            await BaseDatabase.connection(`turma`)
                .update({ modulo: modulo })
                .where("id", id)
        } catch (error: any) {
            throw new Error("Erro Inexperado")
        
        }
    }
}