import express from "express";
import { getTodos, addTodo, updateTodoController, deleteTodoController } from "../controllers/todoController.js";

const router = express.Router();

router.get("/", getTodos);
router.post("/", addTodo);
router.put("/:id", updateTodoController);
router.delete("/:id", deleteTodoController);

export default router;
