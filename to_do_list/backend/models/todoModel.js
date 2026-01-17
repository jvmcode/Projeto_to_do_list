import fs from "fs";

const FILE_PATH = "backend/todos.json";

export const readTodos = () => {
  const data = fs.readFileSync(FILE_PATH);
  return JSON.parse(data);
};

export const writeTodos = (todos) => {
  fs.writeFileSync(FILE_PATH, JSON.stringify(todos, null, 2));
};
