import { Request, Response, NextFunction } from "express";
import { User } from "@prisma/client";
import { AddressService } from "../service/address-service";
import { CreateAddressRequest, UpdateAddressRequest } from "../model/address-model";

export class AddressController {
    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const user = (req as any).user as User;
            const request = req.body as CreateAddressRequest;
            request.contact_id = Number(req.params.contactId);

            const response = await AddressService.create(user, request);
            res.status(200).json({ data: response });
        } catch (e) {
            next(e);
        }
    }

    static async get(req: Request, res: Response, next: NextFunction) {
        try {
            const user = (req as any).user as User;
            const request = {
                contact_id: Number(req.params.contactId),
                id: Number(req.params.addressId)
            };

            const response = await AddressService.get(user, request);
            res.status(200).json({ data: response });
        } catch (e) {
            next(e);
        }
    }

    static async update(req: Request, res: Response, next: NextFunction) {
        try {
            const user = (req as any).user as User;
            const request = req.body as UpdateAddressRequest;
            request.contact_id = Number(req.params.contactId);
            request.id = Number(req.params.addressId);

            const response = await AddressService.update(user, request);
            res.status(200).json({ data: response });
        } catch (e) {
            next(e);
        }
    }

    static async remove(req: Request, res: Response, next: NextFunction) {
        try {
            const user = (req as any).user as User;
            const request = {
                contact_id: Number(req.params.contactId),
                id: Number(req.params.addressId)
            };

            await AddressService.remove(user, request);
            res.status(200).json({ data: "OK" });
        } catch (e) {
            next(e);
        }
    }

    static async list(req: Request, res: Response, next: NextFunction) {
        try {
            const user = (req as any).user as User;
            const contactId = Number(req.params.contactId);
            const response = await AddressService.list(user, contactId);
            res.status(200).json({ data: response });
        } catch (e) {
            next(e);
        }
    }
}