import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../models';

const { User } = db;

const authController = {
    register: async (req: Request, res: Response): Promise<Response> => {
        try {
            const { email, password, name } = req.body;

            const user = await User.findOne({ where: { email } });
            if (user) return res.json({ error: "Email already exists!" });

            const hash = await bcrypt.hash(password, 10);

            const newUser = await User.create({ email, password: hash, name });

            if (newUser) {
                return res.json({ message: "Ok" });
            } else {
                return res.json({ error: "Error" });
            }
        } catch (error: any) {
            console.log(error);
            return res.json({
                error: error.message
            });
        }
    },
    login: async (req: Request, res: Response): Promise<Response> => {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ where: { email } });
            if (!user) return res.json({ error: "Invalid email!" });

            const check = await bcrypt.compare(password, user.password);

            if (check) {
                const accessToken = jwt.sign({ userId: user.id }, '3812932sjad34&*@', { expiresIn: '1h' });
                return res.json({
                    accessToken,
                    data: {
                        userId: user.id,
                        name: user.name,
                        email: user.email
                    }
                });
            }

            return res.json({ error: "Wrong password!" });
        } catch (error: any) {
            console.log(error);
            return res.json({
                error: error.message
            });
        }
    },
};

export default authController;
