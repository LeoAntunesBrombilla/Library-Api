import express from 'express';
import { categoriesRoutes } from './routes/categories.routes';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World from the docker container!!');
});

app.use('/categories', categoriesRoutes);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Our app is working!');
});

export default app;
