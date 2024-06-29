import { Router, Request, Response } from 'express';

const defaultRoute = Router();

defaultRoute.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Bem vindo a Multischool API' });
});

export default defaultRoute;
