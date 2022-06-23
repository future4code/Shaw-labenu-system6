import { app } from "./app";
import createTurma from "./endpoint/CreateTurma";
import getAllTurma from "./endpoint/GetTurma";
import updateModulo from "./endpoint/UpdateTurma";
import { getStudentsByName } from "./endpoints/getStudentsByName";
import { postStudent } from "./endpoints/postStudents";




app.get("/turma",getAllTurma)
app.post("/create-turma",createTurma)
app.put("/updateModel/:id", updateModulo)
app.get("/estudante/:nome", getStudentsByName)
app.post("/criarestudante", postStudent)

