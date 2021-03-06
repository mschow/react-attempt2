'use strict';

import path from 'path';
import express from 'express';
import config from 'config';
import bodyParser from 'body-parser';
import api from './routes'; //Root API route

const app = express();
const PORT = config.port;
const PUBLIC_DIR = path.join(__dirname, 'public');

//Middleware
app.use(bodyParser.json());
app.use('/api', api);
app.use(express.static(PUBLIC_DIR));

app.use((err, req, res, next) => {
  res.status(500).json({
    error: err.message
  })
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})

export default app

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

export default app
