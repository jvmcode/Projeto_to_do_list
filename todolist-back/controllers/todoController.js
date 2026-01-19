import { readTodos, writeTodo, updateTodo, deleteTodo } from "../models/todoModel.js";

export const getTodos = async (req, res) => {
  const todos = await readTodos();
  res.json(todos);
};

export const addTodo = async (req, res) => {
  const { text, category } = req.body;
  const newTodo = await writeTodo({ text, category });
  res.status(201).json(newTodo);
};

export const updateTodoController = async (req, res) => {
  const { id } = req.params;
  const { text, category, isCompleted } = req.body;
  const updated = await updateTodo(id, { text, category, isCompleted });
  res.json(updated);
};

export const deleteTodoController = async (req, res) => {
  const { id } = req.params;
  await deleteTodo(id);
  res.json({ message: "Tarefa removida!" });
};
