import { readTodos, writeTodos } from "../models/todoModel.js";

export const getTodos = (req, res) => {
  res.json(readTodos());
};

export const addTodo = (req, res) => {
  const todos = readTodos();
  const { text, category } = req.body;
  const newTodo = { id: Date.now(), text, category, isCompleted: false };
  todos.push(newTodo);
  writeTodos(todos);
  res.status(201).json(newTodo);
};

export const updateTodo = (req, res) => {
  const todos = readTodos();
  const { id } = req.params;
  const { text, category, isCompleted } = req.body;

  const updatedTodos = todos.map(todo =>
    todo.id == id ? { ...todo, text, category, isCompleted } : todo
  );

  writeTodos(updatedTodos);
  res.json({ message: "Tarefa atualizada!" });
};

export const deleteTodo = (req, res) => {
  const todos = readTodos();
  const { id } = req.params;
  const filteredTodos = todos.filter(todo => todo.id != id);
  writeTodos(filteredTodos);
  res.json({ message: "Tarefa removida!" });
};
