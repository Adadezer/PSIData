const cors = require('cors');
const express = require('express');
const routerContasPagar = require('./routes/rotas.routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routerContasPagar);

module.exports = app;
