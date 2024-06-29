import { Router } from 'express';
import { getUsers } from '../controllers/userController';

const userRoutes = Router();

userRoutes.route('/users')
  .get(getUsers)
export default userRoutes;
