import express from 'express';
import userRoutes from './routes/userRoutes'
import cors from 'cors';
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


// Body parsing Middleware 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(defaultRoute);
app.use('/api', userRoutes);



const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/', async(req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({ message: `Welcome to the cookbook API! \n Endpoints available at http://localhost:${port}/api/v1` })
})

try {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`)
    })
} catch (error) {
    console.log(`Error occurred: ${error.message}`)
}