const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const router = express.Router();

router
    .route('*')
    .get((req, res) => res.sendFile(path.join(__dirname, 'dist', 'index.html')));

app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/processing'));

app.use(router);

http.createServer(app).listen(3000);
