import { app } from "./app";
import createTurma from "./endpoint/CreateTurma";
import getAllTurma from "./endpoint/GetTurma";
import updateModulo from "./endpoint/UpdateTurma";



app.get("/turma",getAllTurma)
app.post("/create-turma",createTurma)
app.put("/updateModel/:id", updateModulo)