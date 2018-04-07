import express from 'express';
import proxy from 'express-http-proxy';

const app = express();

app.use('/products', proxy('www.westelm.com'));
app.use(express.static('public'));
