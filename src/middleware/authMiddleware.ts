// authMiddleware.ts

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  userId: number;
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Verifica se o cabeçalho Authorization está presente e extrai o token JWT
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'Unauthorized: Missing authorization header' });
  }

  const token = authHeader.split(' ')[1]; // Formato esperado: 'Bearer <token>'

  // Verifica se o token é válido
  jwt.verify(token, process.env.JWT_SECRET || 'default_secret', (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }

    // Se o token for válido, decodifica o payload e adiciona ao objeto de request para uso posterior
    const { userId } = decoded as JwtPayload;
    req = userId;
    next();
  });
};
