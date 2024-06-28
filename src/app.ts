import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import defaultRoute from './routes/default';

const app = express();

// Ativar CORS
app.use(cors());

app.use(express.json());
app.use('/users', userRoutes);
app.use('/', defaultRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
