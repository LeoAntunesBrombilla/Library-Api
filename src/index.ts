import express from 'express';
import 'dotenv/config';
import { router } from './routes/';
import Connect from './config/connect';
import bodyParser from 'body-parser';

const db = process.env.DB_URL;

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (!db) {
  process.exit(1);
}

app.use(router);

Connect({ db });

app.get('/', (req, res) => {
  res.send('Hello World from the docker container!!');
});

export default app;
