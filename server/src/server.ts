import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('server.ts');

  response.json([
    'Beni',
    'Batatinha',
    'Potato Man',
    'Pepsi Man'
  ])
});

app.listen(3333);