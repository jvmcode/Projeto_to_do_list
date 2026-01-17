import { useState, useEffect } from 'react';

import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';

import { fetchTodos, addTodoApi, removeTodoApi, completeTodoApi } from './controllers/todoController';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  
  useEffect(() => {
    fetchTodos()
      .then(data => setTodos(data))
      .catch(err => console.error("Erro ao carregar tarefas:", err));
  }, []);

  
  const addTodo = async (text, category) => {
    const newTodo = await addTodoApi(text, category);
    setTodos([...todos, newTodo]);
  };

  
  const removeTodo = async (id) => {
    await removeTodoApi(id);
    setTodos(todos.filter(todo => todo.id !== id));
  };

  
  const completeTodo = async (id) => {
    const todo = todos.find(t => t.id === id);
    const updated = await completeTodoApi(todo);
    setTodos(
      todos.map(t =>
        t.id === id ? updated : t
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
