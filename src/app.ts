import express from 'express';
import userRoutes from './routes/userRoutes';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import db from './models';
import authRouter from './routes/auth.router';
import morgan from 'morgan';


const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'MultiSchool API Documentation',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.ts'],
};

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('combined')); // Adiciona o middleware de logging
// Rotas
app.use('/api', userRoutes);
app.use('/auth', authRouter);

// Test route
app.get('/test', (req, res) => {
  res.send('Server is running');
});

// Swagger
//const specs = swaggerJsdoc(options);
//app.use('/', swaggerUi.serve, swaggerUi.setup(specs));



// Sync database and start server
db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
}).catch((err: any) => {
  console.error('Unable to connect to the database:', err);
});
