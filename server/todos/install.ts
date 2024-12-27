import { TodoServiceImpl } from './todos_service_impl';
import { createDbConnection } from '../base/connection';
import { IdGenerator } from '../base/id_generator';

export function installTodos({
    app, idGenerator,
}: {
    app: any,
    idGenerator: IdGenerator,
}) {
    const dbConnection = createDbConnection();

    const todoService = new TodoServiceImpl(dbConnection, idGenerator);

    app.get('/_api/todos', async (req, res) => {
        const { todos } = await todoService.findTodos({});
        res.send(todos);
    });
    app.post('/_api/todos', todoService.createTodo);
}
