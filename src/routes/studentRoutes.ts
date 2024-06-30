import { Router } from 'express';
import { getAllStudents, getStudentById, createStudent, updateStudent, deleteStudent } from '../controllers/studentController';
import { authMiddleware } from '../middleware/authMiddleware';

const studentRouter = Router();

studentRouter.post('/students', createStudent);

studentRouter.use(authMiddleware);

studentRouter.get('/students', getAllStudents);
studentRouter.get('/students/:id', getStudentById);
studentRouter.put('/students/:id', updateStudent);
studentRouter.delete('/students/:id', deleteStudent);

export default studentRouter;
