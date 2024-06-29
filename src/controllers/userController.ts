// userController.ts

import { Request, Response } from 'express';
import db from '../models'; // Importe seus modelos

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await db.User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
