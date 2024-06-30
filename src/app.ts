import express from 'express';
import userRoutes from './routes/studentRoutes';
import cors from 'cors';
import bodyParser from 'body-parser';
import db from './models';
import authRouter from './routes/auth.router';
import morgan from 'morgan';
import schoolRouter from './routes/school.routes';
import { listRoutes } from './middleware/list_routes_middleware';
import studentRouter from './routes/studentRoutes';
import companyRoutes from './routes/company.route';
import { authMiddleware } from './middleware/authMiddleware';


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('combined'));

// Rotas

// Middleware para listar todas as rotas
app.get('/', listRoutes(app));

app.use(authMiddleware);
app.use('/api', authRouter);
app.use('/api', studentRouter);
app.use('/api', schoolRouter);
app.use('/api', companyRoutes);

// Test route
app.get('/test', (req, res) => {
  res.send('Servidor rodando');
});


// Sync database and start server
db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`App rodando na port ${port}`);
  });
}).catch((err: any) => {
  console.error('Erro ao conectar com a DB:', err);
});
