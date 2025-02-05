const express = require('express');

const router = express.Router();

const todoController = require('../controllers/todoController.js');

router.get('/', todoController.getAllTodos);
router.get('/:id', todoController.getTodo);

router.post('/', todoController.postTodo);
router.patch('/:id', todoController.patchTodo);

router.delete('/', todoController.deleteAllTodos);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;
