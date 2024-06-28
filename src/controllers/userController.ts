import { Request, Response } from 'express';
import { connection } from '../database';
import { User } from '../models/User';

export const getUsers = async (req: Request, res: Response) => {
    try {
        const [rows] = await connection.query('SELECT * FROM users');
        res.json(rows);
    } catch (error) {
        res.status(500).send('Erro ao buscar usuários');
    }
};

export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const [rows] = await connection.query('SELECT * FROM users WHERE id = ?', [id]);
        res.json(rows);
    } catch (error) {
        res.status(500).send('Erro ao buscar usuário');
    }
};

export const createUser = async (req: Request, res: Response) => {
    const newUser: User = req.body;
    try {
        const [result] = await connection.query('INSERT INTO users SET ?', [newUser]);
        res.json({ id: (result as any).insertId, ...newUser });
    } catch (error) {
        res.status(500).send('Erro ao criar usuário');
    }
};

export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedUser: User = req.body;
    try {
        await connection.query('UPDATE users SET ? WHERE id = ?', [updatedUser, id]);
        res.send('Usuário atualizado com sucesso');
    } catch (error) {
        res.status(500).send('Erro ao atualizar usuário');
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await connection.query('DELETE FROM users WHERE id = ?', [id]);
        res.send('Usuário deletado com sucesso');
    } catch (error) {
        res.status(500).send('Erro ao deletar usuário');
    }
};
