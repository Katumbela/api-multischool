/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API para gerenciamento de usuários
 */

import { Router } from 'express';
import { getUsers, createUser, getUserById, updateUser } from '../controllers/userController';

const userRoutes = Router();

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Retorna todos os usuários
 *     tags: [Users]
 *     responses:
 *       '200':
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
userRoutes.route('/users')
    .get(getUsers)
    .post(createUser);

userRoutes.route('/users/:id')
    .get(getUserById)
    .put(updateUser);



export default userRoutes;
