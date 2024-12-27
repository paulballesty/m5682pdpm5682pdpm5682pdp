import { IdGenerator, Model } from "../base/id_generator";
import { CreateUserRequest, CreateUserResponse, GetUserRequest, GetUserResponse, UserService } from "./users_service";

export class UserServiceImpl implements UserService {

    constructor(
        private readonly knex: any,
        private readonly idGenerator: IdGenerator,
    ) {
        
    }

    async getUser({ id }: GetUserRequest): Promise<GetUserResponse> {
        const usersDao = await this.knex('users').where({ id }).returning('*');
        return usersDao[0];
    }

    async createUser({ email }: CreateUserRequest): Promise<CreateUserResponse> {
        if (email != null && email.trim().length === 0) {
            throw new Error('Invalid email');
        }

        const id = this.idGenerator.generateId(Model.USER);
        const usersDao = await this.knex('users').insert({ id, email }).returning('*');

        return {
            user: usersDao[0],
        }
    }

    
}
