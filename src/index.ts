import { Response,Request } from "express";
import { app } from "./app";


app.get("/test",(req:Request,res:Response)=>{
    console.log("Hello World")

})