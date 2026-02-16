import { Request, Response, NextFunction } from "express";
import { CreateContactRequest, UpdateContactRequest } from "../model/contact-model";
import { ContactService } from "../service/contact-service";
import { User } from "@prisma/client";

export class ContactController {
    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const request: CreateContactRequest = req.body as CreateContactRequest;
            // (req as any).user didapat dari authMiddleware
            const response = await ContactService.create((req as any).user, request);
            res.status(200).json({
                data: response
            });
        } catch (e) {
            next(e);
        }
    }

    static async get(req: Request, res: Response, next: NextFunction) {
        try {
            const contactId = Number(req.params.contactId);
            const response = await ContactService.get((req as any).user as User, contactId);
            res.status(200).json({
                data: response
            });
        } catch (e) {
            next(e);
        }
    }

    static async update(req: Request, res: Response, next: NextFunction) {
        try {
            const request: UpdateContactRequest = req.body as UpdateContactRequest;
            request.id = Number(req.params.contactId); // Ambil ID dari URL

            const response = await ContactService.update((req as any).user as User, request);
            res.status(200).json({
                data: response
            });
        } catch (e) {
            next(e);
        }
    }

    static async remove(req: Request, res: Response, next: NextFunction) {
        try {
            const contactId = Number(req.params.contactId);
            await ContactService.remove((req as any).user as User, contactId);
            res.status(200).json({
                data: "OK"
            });
        } catch (e) {
            next(e);
        }
    }

    //search
    static async search(req: Request, res: Response, next: NextFunction) {
        try {
            const request: SearchContactRequest = {
                name: req.query.name as string,
                email: req.query.email as string,
                phone: req.query.phone as string,
                page: req.query.page ? Number(req.query.page) : 1,
                size: req.query.size ? Number(req.query.size) : 10,
            };

            const response = await ContactService.search((req as any).user as User, request);
            res.status(200).json(response); // response sudah mengandung data dan paging
        } catch (e) {
            next(e);
        }
    }

    static async update(req: Request, res: Response, next: NextFunction) {
        try {
            const request: UpdateContactRequest = req.body as UpdateContactRequest;
            request.id = Number(req.params.contactId); // Ambil ID dari URL path

            const response = await ContactService.update((req as any).user as User, request);
            res.status(200).json({
                data: response
            });
        } catch (e) {
            next(e);
        }
    }

    static async remove(req: Request, res: Response, next: NextFunction) {
        try {
            const contactId = Number(req.params.contactId);
            await ContactService.remove((req as any).user as User, contactId);
            res.status(200).json({
                data: "OK"
            });
        } catch (e) {
            next(e);
        }
    }


}