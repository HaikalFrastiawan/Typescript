import { Request, Response, NextFunction } from "express";
import { RegisterUserRequest, LoginUserRequest, UpdateUserRequest } from "../model/user-model";
import { UserService } from "../service/user-service";

export class UserController {
    //Register User
    static async register(req: Request, res: Response, next: NextFunction) {
        try {
            const request: RegisterUserRequest = req.body as RegisterUserRequest;
            const response = await UserService.register(request);
            res.status(200).json({
                data: response
            });
        } catch (e) {
            next(e); // Dilempar ke error-middleware yang kita buat tadi
        }
    }

    //Login User
    static async login(req: Request, res: Response, next: NextFunction) {
        try {
            const request: LoginUserRequest = req.body as LoginUserRequest;
            const response = await UserService.login(request);
            res.status(200).json({
                data: response
            });
        } catch (e) {
            next(e);
        }
    }

    //Get User
    static async get(req: Request, res: Response, next: NextFunction) {
    try {
        // Ambil username dari data user yang sudah ditempel oleh middleware
        const username = (req as any).user.username;
        const response = await UserService.get(username);
        res.status(200).json({
            data: response
        });
    } catch (e) {
        next(e);
    }
}
    //update
    static async update(req: Request, res: Response, next: NextFunction) {
    try {
        const request: UpdateUserRequest = req.body as UpdateUserRequest;
        const response = await UserService.update((req as any).user, request);
        res.status(200).json({
            data: response
        });
    } catch (e) {
        next(e);
    }
    }

    //Logout
    // Tambahkan di dalam class UserController
    static async logout(req: Request, res: Response, next: NextFunction) {
    try {
        // user didapat dari authMiddleware
        await UserService.logout((req as any).user);
        res.status(200).json({
            data: "OK"
        });
    } catch (e) {
        next(e);
    }
}
}