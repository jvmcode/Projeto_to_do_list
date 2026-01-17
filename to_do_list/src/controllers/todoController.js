const API_URL = "http://localhost:3001/todos";

// Buscar todos
export const fetchTodos = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

// Adicionar
export const addTodoApi = async (text, category) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, category })
  });
  return res.json();
};

// Remover
export const removeTodoApi = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};

// Completar
export const completeTodoApi = async (todo) => {
  await fetch(`${API_URL}/${todo.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...todo, isCompleted: !todo.isCompleted })
  });
};
