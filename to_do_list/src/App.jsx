import { useState, useEffect } from 'react';

import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  // (a) Carregar tarefas do backend ao montar
  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  // (b) Adicionar tarefa
  const addTodo = (text, category) => {
    fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, category })
    })
      .then(res => res.json())
      .then(newTodo => setTodos([...todos, newTodo]));
  };

  // (c) Remover tarefa
  const removeTodo = (id) => {
    fetch(`http://localhost:3001/todos/${id}`, { method: "DELETE" })
      .then(() => setTodos(todos.filter(todo => todo.id !== id)));
  };

  // (d) Completar tarefa
  const completeTodo = (id) => {
    const todo = todos.find(t => t.id === id);
    fetch(`http://localhost:3001/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...todo, isCompleted: !todo.isCompleted })
    })
      .then(() =>
        setTodos(
          todos.map(t =>
            t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
          )
        )
      );
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        {todos
          .filter((todo) =>
            filter === "All" ? true : filter === "Completed" ? todo.isCompleted : !todo.isCompleted
          )
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) =>
            sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text)
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
