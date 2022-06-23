export class updateClassModel{
 
    constructor(
        private id: string,
        private turma_id: string
    ){ }

    public getTurmaId(){
        return this.turma_id
    }

    public getId(){
        return this.id
    }
}