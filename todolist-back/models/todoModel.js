import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient(); // ✅ funciona no Prisma 5

export const readTodos = async () => prisma.todo.findMany();
export const writeTodo = async (todo) => prisma.todo.create({ data: todo });
export const updateTodo = async (id, data) =>
  prisma.todo.update({ where: { id: Number(id) }, data });
export const deleteTodo = async (id) =>
  prisma.todo.delete({ where: { id: Number(id) } });
