import express from 'express';
import userRoutes from './routes/userRoutes'
import defaultRoute from './routes/default';

const app = express();
const port = 3000;

app.use(express.json());
app.use(defaultRoute);
app.use(userRoutes);

app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`);
});
