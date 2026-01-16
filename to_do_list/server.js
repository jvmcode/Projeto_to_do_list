import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Funções auxiliares para ler/escrever JSON
const readTodos = () => {
  const data = fs.readFileSync("todos.json");
  return JSON.parse(data);
};

const writeTodos = (todos) => {
  fs.writeFileSync("todos.json", JSON.stringify(todos, null, 2));
};

// Endpoints
app.get("/todos", (req, res) => {
  res.json(readTodos());
});

app.post("/todos", (req, res) => {
  const todos = readTodos();
  const { text, category } = req.body;
  const newTodo = { id: Date.now(), text, category, isCompleted: false };
  todos.push(newTodo);
  writeTodos(todos);
  res.status(201).json(newTodo);
});

app.put("/todos/:id", (req, res) => {
  const todos = readTodos();
  const { id } = req.params;
  const { text, category, isCompleted } = req.body;
  const updatedTodos = todos.map(todo =>
    todo.id == id ? { ...todo, text, category, isCompleted } : todo
  );
  writeTodos(updatedTodos);
  res.json({ message: "Tarefa atualizada!" });
});

app.delete("/todos/:id", (req, res) => {
  const todos = readTodos();
  const { id } = req.params;
  const filteredTodos = todos.filter(todo => todo.id != id);
  writeTodos(filteredTodos);
  res.json({ message: "Tarefa removida!" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
