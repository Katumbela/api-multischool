import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const secretKey = 'your_secret_key';

interface JwtPayload {
  userId: string;
  email: string;
}

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (token) {
    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      // Use tipo de asserção para evitar o erro de tipo
      (req as any).user = user as JwtPayload;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
