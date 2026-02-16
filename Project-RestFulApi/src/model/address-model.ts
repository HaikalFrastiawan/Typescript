export interface AddressResponse {
    id: number;
    street?: string | null;
    city?: string | null;
    province?: string | null;
    country: string;
    postal_code: string;
}

export interface CreateAddressRequest {
    contact_id: number;
    street?: string;
    city?: string;
    province?: string;
    country: string;
    postal_code: string;
}


export interface UpdateAddressRequest {
    id: number;
    contact_id: number;
    street?: string;
    city?: string;
    province?: string;
    country: string;
    postal_code: string;
}