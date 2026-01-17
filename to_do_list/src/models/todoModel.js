
export class Todo {
  constructor(id, text, category, isCompleted = false) {
    this.id = id;
    this.text = text;
    this.category = category;
    this.isCompleted = isCompleted;
  }
}


export const createTodo = (text, category) => {
  return new Todo(Date.now(), text, category, false);
};


export const toggleTodo = (todo) => {
  return new Todo(todo.id, todo.text, todo.category, !todo.isCompleted);
};
