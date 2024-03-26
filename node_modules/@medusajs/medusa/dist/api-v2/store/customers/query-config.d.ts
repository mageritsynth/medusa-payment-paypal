import { CustomerDTO } from "@medusajs/types";
export declare const defaultStoreCustomersRelations: never[];
export declare const allowedStoreCustomersRelations: string[];
export declare const defaultStoreCustomersFields: (keyof CustomerDTO)[];
export declare const retrieveTransformQueryConfig: {
    defaultFields: string[];
    defaultRelations: never[];
    allowedRelations: string[];
    isList: boolean;
};
export declare const defaultStoreCustomerAddressRelations: never[];
export declare const allowedStoreCustomerAddressRelations: string[];
export declare const defaultStoreCustomerAddressFields: string[];
export declare const retrieveAddressTransformQueryConfig: {
    defaultFields: string[];
    defaultRelations: never[];
    allowedRelations: string[];
    isList: boolean;
};
export declare const listAddressesTransformQueryConfig: {
    isList: boolean;
    defaultFields: string[];
    defaultRelations: never[];
    allowedRelations: string[];
};
