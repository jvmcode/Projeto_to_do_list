import { Todo } from "../models/todoModel";

const API_URL = "/todos";

export const fetchTodos = async () => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Erro ao buscar tarefas");
    const data = await res.json();
    return data.map(t => new Todo(t.id, t.text, t.category, t.isCompleted));
  } catch (err) {
    console.error(err);
    throw err; // repassa o erro para o App.jsx
  }
};

export const addTodoApi = async (text, category) => {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, category })
    });
    if (!res.ok) throw new Error("Erro ao adicionar tarefa");
    const saved = await res.json();
    return new Todo(saved.id, saved.text, saved.category, saved.isCompleted);
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const removeTodoApi = async (id) => {
  try {
    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Erro ao remover tarefa");
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const completeTodoApi = async (todo) => {
  try {
    const res = await fetch(`${API_URL}/${todo.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...todo, isCompleted: !todo.isCompleted })
    });
    if (!res.ok) throw new Error("Erro ao atualizar tarefa");
    const updated = await res.json();
    return new Todo(updated.id, updated.text, updated.category, updated.isCompleted);
  } catch (err) {
    console.error(err);
    throw err;
  }
};
