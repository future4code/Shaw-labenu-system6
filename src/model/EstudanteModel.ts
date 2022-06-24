export class StudentModel{
    private id: string
    private nome: string
    private email: string
    private data_nasc: string
    private turma_id: string

    constructor(
      id: string,
      nome: string,
      email: string,
      data_nasc: string,
      turma_id: string
    ){  this.id = id ,
        this.nome= nome,
        this.email=email,
        this.data_nasc= data_nasc,
        this.turma_id= turma_id
    }

    public getStudent(){
        return([this.id, this.nome, this.email, this.data_nasc, this.turma_id])
    }

    public getId(){
        return this.id
    }

    public getNome(){
        return this.nome
    }

    public getEmail() {
        return this.email
    }

    public getDataNasc(){
        return this.data_nasc
    }

    public getTurmaId(){
        return this.turma_id
    }
}

