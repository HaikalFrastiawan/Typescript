import { v4 as uuid } from "uuid"; 
import { prismaClient } from "../application/database";
import { ResponseError } from "../error/response-error";
import { UserValidation } from "../validation/user-validation";
import { Validation } from "../validation/validation";
import bcrypt from "bcrypt";
import { 
    LoginUserRequest, 
    RegisterUserRequest, 
    UpdateUserRequest,
    UserResponse,
 } from "../model/user-model"; 

export class UserService {
    // ---  REGISTER ---
    static async register(request: RegisterUserRequest): Promise<UserResponse> {
        const registerRequest = Validation.validate(UserValidation.REGISTER, request);

        const countUser = await prismaClient.user.count({
            where: { username: registerRequest.username }
        });

        if (countUser > 0) {
            throw new ResponseError(400, "Username already exists");
        }

        registerRequest.password = await bcrypt.hash(registerRequest.password, 10);

        const user = await prismaClient.user.create({
            data: registerRequest
        });

        return {
            username: user.username,
            name: user.name
        };
    }

    // ---   LOGIN ---
    static async login(request: LoginUserRequest): Promise<UserResponse> {
        // 1. Validasi input menggunakan skema LOGIN
        const loginRequest = Validation.validate(UserValidation.LOGIN, request);

        // 2. Cari user berdasarkan username
        let user = await prismaClient.user.findUnique({
            where: {
                username: loginRequest.username
            }
        });

        // 3. Jika user tidak ditemukan
        if (!user) {
            throw new ResponseError(401, "username or password wrong...");
        }

        // 4. Cek apakah password di database cocok dengan input (bcrypt)
        const isPasswordValid = await bcrypt.compare(loginRequest.password, user.password);
        if (!isPasswordValid) {
            throw new ResponseError(401, "username or password wrong...");
        }

        // 5. Jika sukses, buat Token baru (UUID) dan update ke database
        user = await prismaClient.user.update({
            where: {
                username: user.username
            },
            data: {
                token: uuid()
            }
        });

        // 6. Kembalikan response sesuai spek (username, name, dan token)
        return {
            username: user.username,
            name: user.name,
            token: user.token!
        };
    }

    //Get User
    static async get(username: string): Promise<UserResponse> {
    const user = await prismaClient.user.findUnique({
        where: { username: username }
    });

    if (!user) {
        throw new ResponseError(404, "User not found");
    }

    return {
        username: user.username,
        name: user.name
    };
}

    //update user
 static async update(user: any, request: UpdateUserRequest): Promise<UserResponse> {
    const updateRequest = Validation.validate(UserValidation.UPDATE, request);

    const data: any = {};
    if (updateRequest.name) {
        data.name = updateRequest.name;
    }

    if (updateRequest.password) {
        data.password = await bcrypt.hash(updateRequest.password, 10);
    }

    const result = await prismaClient.user.update({
        where: {
            username: user.username
        },
        data: data
    });

    return {
        username: result.username,
        name: result.name
    };
    }

    //Logout
    static async logout(user: any): Promise<string> {
    // Kita update user yang sedang login, set tokennya jadi null
    await prismaClient.user.update({
        where: {
            username: user.username
        },
        data: {
            token: null
        }
    });

    return "OK";
}
}
