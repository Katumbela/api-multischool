import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user'; // Importe seu modelo Sequelize User aqui

const secretKey = 'multischool_app';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  try {
    const newUser = await User.create({ name, email });
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).send('User not found');
    }
    await user.update({ name, email });
    res.send('User updated');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).send('User not found');
    }
    await user.destroy();
    res.send('User deleted');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).send('Invalid email or password');
    }
    const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password, age } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);
  try {
    const newUser = await User.create({ name, email, password: hashedPassword, age });
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
