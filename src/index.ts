import express from 'express';

const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Hello World!!');
});

app.listen(PORT, () => {
  console.log('Our app is working!');
});

export default app;
