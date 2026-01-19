# Entrega Projeto FullStack

## Modulo 2/3/4

Fluxo da Aplicação
Usuário acessa o frontend (http://localhost:5173) e interage com a lista de tarefas.

Frontend (React + Vite) envia requisições (GET, POST, PUT, DELETE) para /todos.

O proxy do Vite redireciona essas chamadas para o Backend (http://localhost:3001).

Backend (Express) recebe a requisição e usa o Prisma Client para acessar o banco.

Banco de dados (SQLite) armazena e retorna os dados das tarefas.

O Backend responde em formato JSON.

O Frontend atualiza a interface com os dados recebidos.


