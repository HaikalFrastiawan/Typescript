import { Address, User } from "@prisma/client";
import { AddressResponse, CreateAddressRequest, UpdateAddressRequest } from "../model/address-model";
import { Validation } from "../validation/validation";
import { AddressValidation } from "../validation/address-validation";
import { prismaClient } from "../application/database";
import { ResponseError } from "../error/response-error";

export class AddressService {

    // Helper untuk cek apakah kontak ada (menggantikan ContactService.get)
    static async checkContactMustExists(user: User, contactId: number) {
        const contact = await prismaClient.contact.findFirst({
            where: {
                id: contactId,
                username: user.username
            }
        });

        if (!contact) {
            throw new ResponseError(404, "Contact is not found");
        }
    }

    static async create(user: User, request: CreateAddressRequest): Promise<AddressResponse> {
        const createRequest = Validation.validate(AddressValidation.CREATE, request);
        
        await this.checkContactMustExists(user, createRequest.contact_id);

        const address = await prismaClient.address.create({
            data: createRequest
        });

        return address as AddressResponse;
    }

    static async get(user: User, request: any): Promise<AddressResponse> {
        const getRequest = Validation.validate(AddressValidation.GET, request);

        await this.checkContactMustExists(user, getRequest.contact_id);

        const address = await prismaClient.address.findFirst({
            where: {
                id: getRequest.id,
                contact_id: getRequest.contact_id
            }
        });

        if (!address) {
            throw new ResponseError(404, "Address is not found");
        }

        return address as AddressResponse;
    }

    static async update(user: User, request: UpdateAddressRequest): Promise<AddressResponse> {
        const updateRequest = Validation.validate(AddressValidation.UPDATE, request);

        await this.checkContactMustExists(user, updateRequest.contact_id);

        const addressCheck = await this.get(user, {
            id: updateRequest.id,
            contact_id: updateRequest.contact_id
        });

        const address = await prismaClient.address.update({
            where: { id: addressCheck.id },
            data: updateRequest
        });

        return address as AddressResponse;
    }

    static async remove(user: User, request: any): Promise<AddressResponse> {
        const removeRequest = Validation.validate(AddressValidation.GET, request);

        await this.checkContactMustExists(user, removeRequest.contact_id);

        const addressCheck = await this.get(user, {
            id: removeRequest.id,
            contact_id: removeRequest.contact_id
        });

        const address = await prismaClient.address.delete({
            where: { id: addressCheck.id }
        });

        return address as AddressResponse;
    }

    static async list(user: User, contactId: number): Promise<Array<AddressResponse>> {
        await this.checkContactMustExists(user, contactId);

        const addresses = await prismaClient.address.findMany({
            where: { contact_id: contactId }
        });

        return addresses as Array<AddressResponse>;
    }
}