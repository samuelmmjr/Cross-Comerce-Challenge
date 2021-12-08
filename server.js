const express = require('express');
const app = express();
const axios = require('axios');

const { create } = require('./controllers/numbers')

app.get('/', create)

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
