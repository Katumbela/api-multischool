import { Request, Response } from 'express';
import db from '../models'; // Importe seus modelos



const { User } = db;


export const getUsers = async (req: Request, res: Response) => {
  try {
    console.log(`Received GET /users request at ${new Date().toISOString()}`);
    const users = await User.findAll();
    console.log(`Responding with users: ${JSON.stringify(users)}`);
    res.json(users);
  } catch (error) {
    console.error(`Error occurred in GET /users: ${error}`);
    res.status(500).send('Internal Server Error');
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    console.log(`Received GET /users/${id} request at ${new Date().toISOString()}`);
    const user = await User.findByPk(id);
    if (!user) {
      console.log(`User with id ${id} not found`);
      return res.status(404).send('User not found');
    }
    console.log(`Responding with user: ${JSON.stringify(user)}`);
    res.json(user);
  } catch (error) {
    console.error(`Error occurred in GET /users/${id}: ${error}`);
    res.status(500).send('Internal Server Error');
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    console.log(`Received POST /users request with body: ${JSON.stringify(req.body)} at ${new Date().toISOString()}`);
    const newUser = await User.create({ name, email, password });
    console.log(`Created new user: ${JSON.stringify(newUser)}`);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(`Error occurred in POST /users: ${error}`);
    res.status(500).send('Internal Server Error');
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).send('User not found');
    }
    await user.update({ name, email, password });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
