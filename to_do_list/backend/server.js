import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todoRoutes.js";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Usando o router
app.use("/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
