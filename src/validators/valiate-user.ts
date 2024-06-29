import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

export const validateUser = [
  body('name').isString(),
  body('email').isEmail(),
  body('age').isInt({ min: 0 }),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
