# Entrega Projeto FullStack

## Modulo 2/3/4

Fluxo MVC entre Frontend e Backend
1. Frontend (React) <br>
    • View → Componentes (Todo, TodoForm, Search, Filter) exibem dados e recebem interação do usuário.<br>
    • Controller → todoController.js chama a API e manipula os dados.<br>
    • Model → todoModel.js define a estrutura de um Todo (id, text, category, isCompleted).<br>
2. Backend (Express)<br>
    • Router → todoRoutes.js define os endpoints (/todos, /todos/:id).<br>
    • Controller → todoController.js recebe requisições e aplica regras de negócio.<br>
    • Model → todoModel.js lê/escreve no todos.json.<br>
    • Database → todos.json guarda os dados.


