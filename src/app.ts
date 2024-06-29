import express from 'express';
import userRoutes from './routes/userRoutes'
import cors from 'cors';
import defaultRoute from './routes/default';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(defaultRoute);
app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`);
});
