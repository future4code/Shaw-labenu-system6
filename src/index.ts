import { Response,Request } from "express";
import { app } from "./app";
import { getStudentsByName } from "./endpoints/getStudentsByName";
import { postStudent } from "./endpoints/postStudents";
import { putStudentsClass } from "./endpoints/putStudentsClass";

app.get("/test",(req:Request,res:Response)=>{
    console.log("Hello World")
})

app.get("/estudante/:nome", getStudentsByName)

app.post("/criar-estudante", postStudent)

app.put("/estudante/alterar-turma/:id", putStudentsClass)
