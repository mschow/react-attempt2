'use strict';

import express from 'express';
import config from 'config';
import bodyParser from 'body-parser';
import api from './routes'; //Root API route

const app = express();
const PORT = config.port;

//Middleware
app.use(bodyParser.json());
app.use('/api', api);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
