import { Request, Response } from 'express'; 
import connection from '../database';

export const getUsers = async (req: Request, res: Response) => {
  const [rows] = await connection.execute('SELECT * FROM users');
  res.json(rows);
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const [rows] = await connection.execute('SELECT * FROM users WHERE id = ?', [id]);
  res.json(rows);
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  await connection.execute('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
  res.status(201).send('User created');
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email } = req.body;
  await connection.execute('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id]);
  res.send('User updated');
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  await connection.execute('DELETE FROM users WHERE id = ?', [id]);
  res.send('User deleted');
};
