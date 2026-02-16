export interface RegisterUserRequest {
    username: string;
    password: string;
    name: string;
}

export interface UserResponse {
    username: string;
    name: string;
}

export interface LoginUserRequest {
    username: string;
    password: string;
    token?: string;
}