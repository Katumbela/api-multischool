import { Router } from 'express';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/userController';

const userRoutes = Router();

userRoutes.route('/users')
  .get(getUsers)
  .post(createUser);

  userRoutes.route('users/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);
export default userRoutes;
