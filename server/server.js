const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const boom = require('boom');
const router = require('./routes/index');

const app = express();
const http = require('http').Server(app);

app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use('/api', router);

app.use((req, res, next) => {
    throw boom.notFound('Not found');
});

app.use((err, req, res, next) => {
    err.output.payload.data = err.data;
    return res.status(err.output.statusCode).json(err.output.payload);
});

http.listen(3001);
