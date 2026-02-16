import { Contact, User } from "@prisma/client";
import { ContactResponse, CreateContactRequest, UpdateContactRequest } from "../model/contact-model";
import { ContactValidation } from "../validation/contact-validation";
import { Validation } from "../validation/validation";
import { prismaClient } from "../application/database";

export class ContactService {
    static async create(user: User, request: CreateContactRequest): Promise<ContactResponse> {
        // 1. Validasi input
        const createRequest = Validation.validate(ContactValidation.CREATE, request);

        // 2. Simpan ke database dengan relasi ke user.username
        const contact = await prismaClient.contact.create({
            data: {
                ...createRequest,
                username: user.username
            }
        });

        // 3. Kembalikan response
        return {
            id: contact.id,
            first_name: contact.first_name,
            last_name: contact.last_name,
            email: contact.email,
            phone: contact.phone
        };
    }

    //update
    static async update(user: User, request: any): Promise<ContactResponse> {
    const updateRequest = Validation.validate(ContactValidation.UPDATE, request);

    // Pastikan kontak ada dan milik si user
    const checkContact = await prismaClient.contact.findFirst({
        where: { id: updateRequest.id, username: user.username }
    });

    if (!checkContact) throw new ResponseError(404, "Contact not found");

    const contact = await prismaClient.contact.update({
        where: { id: checkContact.id },
        data: updateRequest
    });

    return contact; // Kembalikan data terbaru
    }

    //delete
    static async remove(user: User, id: number): Promise<string> {
    const checkContact = await prismaClient.contact.findFirst({
        where: { id: id, username: user.username }
    });

    if (!checkContact) throw new ResponseError(404, "Contact not found");

    await prismaClient.contact.delete({
        where: { id: checkContact.id }
    });

    return "OK";
}


    static async search(user: User, request: SearchContactRequest): Promise<Pageable<ContactResponse>> {
    const searchRequest = Validation.validate(ContactValidation.SEARCH, request);
    const skip = (searchRequest.page - 1) * searchRequest.size;

    const filters = [];
    if (searchRequest.name) {
        filters.push({
            OR: [
                { first_name: { contains: searchRequest.name } },
                { last_name: { contains: searchRequest.name } },
            ]
        });
    }
    if (searchRequest.email) {
        filters.push({ email: { contains: searchRequest.email } });
    }
    if (searchRequest.phone) {
        filters.push({ phone: { contains: searchRequest.phone } });
    }

    const contacts = await prismaClient.contact.findMany({
        where: {
            username: user.username,
            AND: filters
        },
        take: searchRequest.size,
        skip: skip
    });

    const total = await prismaClient.contact.count({
        where: {
            username: user.username,
            AND: filters
        }
    });

    return {
        data: contacts.map(contact => ({
            id: contact.id,
            first_name: contact.first_name,
            last_name: contact.last_name,
            email: contact.email,
            phone: contact.phone
        })),
        paging: {
            current_page: searchRequest.page,
            total_page: Math.ceil(total / searchRequest.size),
            size: searchRequest.size
        }
    };
}

}