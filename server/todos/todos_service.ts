
type Todo = {
    title: string,
    content: string | undefined,
    completed: boolean,
    created_by: string,
    assigned_to: string | undefined,
    order: number,
    created_at: Date,
    last_modified_at: Date,
}

export interface TodoService {
    createTodo(request: CreateTodoRequest): Promise<CreateTodoResponse>,
    findTodos(request: FindTodosRequest): Promise<FindTodosResponse>,
    deleteTodo(request: DeleteTodoRequest): Promise<DeleteTodoResponse>,
    assignTodo(request: AssignTodoRequest): Promise<AssignTodoResponse>,
}

export interface CreateTodoRequest {
    title: string,
    content?: string,
}

export interface CreateTodoResponse {
    todo: Todo,
}

export interface FindTodosRequest {
    limit?: number,
}

export interface FindTodosResponse {
    todos: readonly Todo[],
    continuation: string | undefined,
}

export interface DeleteTodoRequest {
    id: number,
}

export interface DeleteTodoResponse {
    todo: Todo,
}

export interface AssignTodoRequest {
    id: number,
    user: string,
}

export interface AssignTodoResponse {
    todo: Todo,
}
