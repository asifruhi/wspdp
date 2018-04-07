const express = require('express');
const proxy = require('express-http-proxy');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/services/*', proxy('https://www.westelm.com/services'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);