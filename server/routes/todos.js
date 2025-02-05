const express = require('express');
const router = express.Router();

const todoController = require('../controllers/TodoController');

router.get('/', todoController.getAllTodos);
router.get('/:id', todoController.getTodo);

router.post('/', todoController.postTodo);
router.patch('/:id', todoController.patchTodo);

router.delete('/', todoController.deleteAllTodos);
router.delete('/:id', todoController.deleteTodo);

export default router;
