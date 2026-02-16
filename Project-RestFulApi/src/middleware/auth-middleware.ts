import { Request, Response, NextFunction } from "express";
import { prismaClient } from "../application/database";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    // 1. Ambil token dari header
    const token = req.get('X-API-TOKEN');

    if (token) {
        // 2. Cari user di database berdasarkan token
        const user = await prismaClient.user.findFirst({
            where: { token: token }
        });

        if (user) {
            // 3. Jika ketemu, simpan data user di request agar bisa dipakai Controller
            (req as any).user = user;
            next();
            return;
        }
    }

    // 4. Jika token salah atau tidak ada
    res.status(401).json({
        errors: "unauthorized"
    }).end();
}