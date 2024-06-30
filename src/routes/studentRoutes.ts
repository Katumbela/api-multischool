import { Router } from 'express';
import { getAllStudents, getStudentById, createStudent, updateStudent, deleteStudent } from '../controllers/studentController';

const studentRouter = Router();

studentRouter.get('/students', getAllStudents);
studentRouter.get('/students/:id', getStudentById);
studentRouter.post('/students', createStudent);
studentRouter.put('/students/:id', updateStudent);
studentRouter.delete('/students/:id', deleteStudent);

export default studentRouter;
