import { Response,Request } from "express";
import { app } from "./app";
import { getStudentsByName } from "./endpoints/getStudentsByName";


app.get("/test",(req:Request,res:Response)=>{
    console.log("Hello World")
})

app.get("/estudante/:nome", getStudentsByName)