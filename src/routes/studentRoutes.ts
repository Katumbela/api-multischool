import { Router } from 'express';
import { getAllStudents, getStudentById, createStudent, updateStudent, deleteStudent } from '../controllers/studentController';
import { authMiddleware } from '../middleware/authMiddleware';

const studentRouter = Router();

studentRouter.post('/students', createStudent);


studentRouter.get('/students', getAllStudents);
studentRouter.post('/students', createStudent);
studentRouter.get('/students/:id', getStudentById);
studentRouter.put('/students/:id', updateStudent);
studentRouter.delete('/students/:id', deleteStudent);

export default studentRouter;
