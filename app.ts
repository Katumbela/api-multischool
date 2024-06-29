import express from 'express';
import userRoutes from './routes/userRoutes'
import cors from 'cors';
import defaultRoute from './routes/default';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { Request, Response, NextFunction } from 'express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'MultiSchool API Documentation',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.ts'], // Caminho para os arquivos de rotas
};


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(defaultRoute);
app.use('/api', userRoutes);



const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});



app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`);
});
