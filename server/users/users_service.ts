
export interface User {
    id: string,
    email: string,
};

export interface UserService {
    getUser(request: GetUserRequest): Promise<GetUserResponse>,
    createUser(request: CreateUserRequest): Promise<CreateUserResponse>,
}

export interface GetUserRequest {
    id: string,
}
export interface GetUserResponse {
    user: User,
}

export interface CreateUserRequest {
    email: string,
};
export interface CreateUserResponse {
    user: User,
};
