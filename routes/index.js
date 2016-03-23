'use strict';

import express from 'express';
import todos from './todos'; //Import the todosRouter

const { Router } = express;
const api = new Router();

api.use('/todos', todos); // Mount the todosRouter to the route /todos

export default api;
