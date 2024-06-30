import express from 'express';
import userRoutes from './routes/userRoutes';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import bodyParser from 'body-parser';
import db from './models';
import authRouter from './routes/auth.router';
import morgan from 'morgan';
import schoolRouter from './routes/school.routes';


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('combined'));

// Rotas
app.use('/api', userRoutes);
app.use('/api', schoolRouter);
app.use('/auth', authRouter);

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
