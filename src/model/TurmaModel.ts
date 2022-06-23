export class TurmaModel {
    constructor(
        private id: string,
        private nome: string,
        private modulo: string
    )
     { 
    }
    public getIdTurma(){
        return this.id
    }

    public getNomeTurma(){
        return this.nome
    }
    public getModuloTurma(){
        return this.modulo
    }
}

export default TurmaModel