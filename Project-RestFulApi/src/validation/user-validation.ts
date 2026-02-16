import { z, ZodType } from "zod";

export class UserValidation {
    // Skema untuk Register
    static readonly REGISTER: ZodType = z.object({
        username: z.string().min(1).max(100),
        password: z.string().min(1).max(100),
        name: z.string().min(1).max(100) 
    });

    //  Login
    static readonly LOGIN: ZodType = z.object({
        username: z.string().min(1).max(100),
        password: z.string().min(1).max(100)
    });

    //update atau patch
    static readonly UPDATE: ZodType =z.object({
        password: z.string().min(1).max(100).optional(),
        name: z.string().min(1).max(100).optional()
    });
}