import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Student } from '../models/student'; 

const authController = {
    login: async (req: Request, res: Response): Promise<Response> => {
        try {
            const { adhesionNumber, password } = req.body;

            // Verifica se o usuário existe no banco de dados pelo número de adesão
            const user = await Student.findOne({ where: { adhesionNumber } });
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            // Compara a senha fornecida com a senha armazenada no banco de dados
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return res.status(401).json({ error: "Incorrect password" });
            }

            // Gera um token de acesso JWT válido por 8 hora
            const accessToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET || 'default_secret', { expiresIn: '8h' });

            // Retorna os dados do usuário e o token de acesso
            return res.status(200).json({
                accessToken,
                data: {
                    userId: user.id,
                    studentName: user.studentName,
                    adhesionNumber: user.adhesionNumber,8
                }
            });
        } catch (error: any) {
            console.error(error);
            return res.status(500).json({ error: `Internal server error: ${error.message}` });
        }
    },
};

export default authController;
