import { ZodType } from "zod";

export class Validation {
    static validate<T>(schema: ZodType<T>, data: T): T {
        return schema.parse(data); // Jika gagal, otomatis melempar ZodError
    }
}