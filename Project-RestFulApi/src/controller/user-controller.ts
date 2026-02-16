import { Request, Response, NextFunction } from "express";
import { RegisterUserRequest, LoginUserRequest } from "../model/user-model";
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
}