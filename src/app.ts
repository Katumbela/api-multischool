import express from 'express';
import userRoutes from './routes/userRoutes';

const app = express();

app.use(express.json());
app.use('/users', userRoutes);
app.use('/', () => 'Bem vindo a Multischool API');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
