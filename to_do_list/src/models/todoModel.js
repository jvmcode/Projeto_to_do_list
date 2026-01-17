// Definição da estrutura de um Todo
export class Todo {
  constructor(id, text, category, isCompleted = false) {
    this.id = id;
    this.text = text;
    this.category = category;
    this.isCompleted = isCompleted;
  }
}

// Função para criar um novo Todo
export const createTodo = (text, category) => {
  return new Todo(Date.now(), text, category, false);
};

// Função para alternar status de conclusão
export const toggleTodo = (todo) => {
  return new Todo(todo.id, todo.text, todo.category, !todo.isCompleted);
};
