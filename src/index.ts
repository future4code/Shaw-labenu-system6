import { app } from "./app";
import createTurma from "./endpoints/CreateTurma";
import getAllTurma from "./endpoints/GetTurma";
import updateModulo from "./endpoints/UpdateTurma";
import { getStudentsByName } from "./endpoints/getStudentsByName";
import { postStudent } from "./endpoints/postStudents";
import { putStudentsClass } from "./endpoints/putStudentsClass";
import { getAllStudents } from "./endpoints/GetAllStudents";
import { getAllTeachers } from "./endpoints/GetAllTeachers";
import { postTeacher } from "./endpoints/PostTeacher";
import { putTeacherClass } from "./endpoints/PutTeacherClass";

app.get("/estudantes", getAllStudents)

app.get("/estudante/:nome", getStudentsByName)

app.get("/docentes", getAllTeachers)

app.get("/turma",getAllTurma)

app.post("/criar-estudante", postStudent)

app.post("/create-turma",createTurma)

app.post("/criar-docente", postTeacher)

app.put("/updateModel/:id", updateModulo)

app.put("/estudante/alterar-turma/:id", putStudentsClass)

app.put("/docente/alterar-turma/:id", putTeacherClass)






