
import { Router } from 'express';
import { getAllSchools, getSchoolById, createSchool, updateSchool, deleteSchool } from '../controllers/schools.controller';
import { authMiddleware } from '../middleware/authMiddleware';

const schoolRouter = Router();
schoolRouter.use(authMiddleware);
schoolRouter.get('/schools', getAllSchools)
    .post('/schools', createSchool);

schoolRouter.get('/schools/:id', getSchoolById)
    .delete('/schools/:id', deleteSchool)
    .put('/schools/:id', updateSchool);


export default schoolRouter;
