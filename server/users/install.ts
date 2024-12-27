import { createDbConnection } from "../base/connection";
import { IdGenerator } from "../base/id_generator";
import { UserServiceImpl } from "./users_service_impl";


export function installUsers({
    app,
    idGenerator,
}: {
    app: any,
    idGenerator: IdGenerator,
}) {

    const dbConnection = createDbConnection();

    const usersService = new UserServiceImpl(dbConnection, idGenerator);

    app.get('/_api/users/:id', async (req, res) => {
        const user = await usersService.getUser({ id:  req.params.id });
        res.send(user);
    });

    app.post('/_api/users', async (req, res) => {
        const email = req.body.email;
        const user = await usersService.createUser({ email });
        res.send(user);
    });

    usersService.createUser({ email: 'example@example.com' });
    usersService.createUser({ email: 'test@example.com' });

}
