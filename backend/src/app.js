const express = require('express');
const cors = require('cors');
const { urlencoded } = require('express');
const morgan = require('morgan');
const routerContasPagar = require('./routes/rotas.routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routerContasPagar);
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

module.exports = app;
