const path = require('path');

const express = require('express');

const homepageRoutes = require('./routes/users')
const notFoundRoutes = require('./routes/404');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(homepageRoutes);
app.use(notFoundRoutes);

app.listen(3000)
