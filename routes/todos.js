'use strict';

import express from 'express';
import Todo from '../lib/todo';

const { Router } = express;
const todosRouter = new Router();

//const todos = [];

//GETs all todos
todosRouter.get('/', (req, res, next) => {
  Todo.find((err, todos) => {
    if (err) return next(err);
    res.json(todos);
  });
});

//POSTs a new todo
todosRouter.post('/', (req, res, next) => {
  Todo.create(req.body, (err, todo) => {
    if (err) return next(err);
    //Status code 201 means 'created' according to REST guidelines
    res.status(201).json(todo);
  });
});

//Retrieve a single todo by ID
todosRouter.get('/:id', (req, res, next) =>{
  Todo.findOne(req.params.id, (err, todo) => {
    if (err) return next(err);
    res.json(todo);
  });
});

//Update a todo with PUT
todosRouter.put('/:id', (req, res, next) => {
  Todo.update(req.params.id, req.body, (err, todo) => {
    if (err) return next(err);
    res.json(todo);
  });
});

//Delete a todo
todosRouter.delete('/:id', (req, res, next) => {
  Todo.delete(req.params.id, (err) => {
    if (err) return next(err);
    //A 204 status means 'no content'
    res.sendStatus(204);
  });
});

export default todosRouter;
