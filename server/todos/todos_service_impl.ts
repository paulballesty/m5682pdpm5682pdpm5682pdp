import { Knex } from 'knex';
import { AssignTodoRequest, AssignTodoResponse, CreateTodoRequest, CreateTodoResponse, DeleteTodoRequest, DeleteTodoResponse, FindTodosRequest, FindTodosResponse, TodoService } from './todos_service';
import { DEFAULT_LIMIT } from '../base/connection';
import { IdGenerator, Model } from '../base/id_generator';

export class TodoServiceImpl implements TodoService {

    constructor(
        private readonly knex: any,
        private readonly idGenerator: IdGenerator,
    ) {
    }

    async createTodo(request: CreateTodoRequest): Promise<CreateTodoResponse> {
        const { title, content } = request;
        if (title == null || title.length === 0) {
            throw new Error('Invalid todo');
        }
        const id = this.idGenerator.generateId(Model.TODO);
        const todosDao = await this.knex('todos').insert({ id, title, content }).returning('*');
        return {
            todo: { ...todosDao[0] },
        };
    }

    async findTodos(request: FindTodosRequest): Promise<FindTodosResponse> {
        const todosDao = await this.knex('todos').limit(request.limit ?? DEFAULT_LIMIT);
        return {
            todos: todosDao,
            continuation: undefined,
        }
    }

    async deleteTodo({ id }: DeleteTodoRequest): Promise<DeleteTodoResponse> {
        const todosDao = await this.knex('todos').where({ id }).del().returning('*');
        return todosDao[0];
    }
    
    async assignTodo({ id, user }: AssignTodoRequest): Promise<AssignTodoResponse> {
        const todosDao = await this.knex('todos').where({ id }).update({ assigned_to: user }).returning('*');
        return todosDao[0];
    }

}
