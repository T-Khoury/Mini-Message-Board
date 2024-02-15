const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes/index')

// express app
const app = express();

// connect to mongodb

app.listen(process.env.PORT || 3000)
// register view engine
app.set('view engine', 'ejs');

// middleware & status files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/', routes);

