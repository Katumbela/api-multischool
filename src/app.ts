import express from 'express';
import userRoutes from './routes/userRoutes'
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc'; 
import db from './models'
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
app.use('/', swaggerUi.serve, swaggerUi.setup(specs));


/*
app.get('/', (req, res) => {
  db.User.findAll({
      include: {
          model: db.Project
      }
  }).then((result: object) => res.json(result)).catch((err: object) => console.error(err));
})
*/

db.sequelize.sync().then(() => {
  app.listen(port, () => {
      console.log(`App listening on port ${port}`)
  })
})