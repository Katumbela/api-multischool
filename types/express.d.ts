import { Request } from 'express';
import jwt from 'jsonwebtoken';

interface AuthenticatedRequest extends Request {
  user?: jwt.JwtPayload;
}

declare module 'express' {
  export interface Request extends AuthenticatedRequest {}
}
