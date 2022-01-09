import express from 'express';

const app = express();
const PORT = process.env.PORT || 2999;

app.get('/', (req, res) => {
  res.send('Hello World!!');
});

app.listen(PORT, () => {
  console.log('Our app is working!');
});

export default app;
