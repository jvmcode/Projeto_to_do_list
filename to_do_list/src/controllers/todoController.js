import { Todo, createTodo, toggleTodo } from "../models/todoModel";

const API_URL = "http://localhost:3001/todos";

// Buscar todos
export const fetchTodos = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();
  // Garantir que cada item seja instância de Todo
  return data.map(t => new Todo(t.id, t.text, t.category, t.isCompleted));
};

// Adicionar
export const addTodoApi = async (text, category) => {
  const newTodo = createTodo(text, category);
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTodo)
  });
  const saved = await res.json();
  return new Todo(saved.id, saved.text, saved.category, saved.isCompleted);
};

// Remover
export const removeTodoApi = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};

// Completar
export const completeTodoApi = async (todo) => {
  const updated = toggleTodo(todo);
  await fetch(`${API_URL}/${todo.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updated)
  });
  return updated;
};
