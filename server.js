const express = require('express');
const app = express();

const { extract } = require('./controllers/numbers')

app.get('/', extract)

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
