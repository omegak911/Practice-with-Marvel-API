const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../db/index');
const router = require('./router');

const port = 3060;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client/dist')))
app.use(router);

app.listen(port, () => console.log('Server is listening to port: ', 3060))