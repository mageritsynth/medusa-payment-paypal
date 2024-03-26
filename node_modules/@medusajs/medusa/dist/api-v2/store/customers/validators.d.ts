import { OperatorMap } from "@medusajs/types";
import { FindParams } from "../../../types/common";
export declare class StoreGetCustomersMeParams extends FindParams {
}
export declare class StorePostCustomersReq {
    first_name: string;
    last_name: string;
    email: string;
    phone?: string;
    company_name?: string;
    metadata?: Record<string, unknown>;
}
export declare class StorePostCustomersMeAddressesReq {
    address_name?: string;
    is_default_shipping?: boolean;
    is_default_billing?: boolean;
    company?: string;
    first_name?: string;
    last_name?: string;
    address_1?: string;
    address_2?: string;
    city?: string;
    country_code?: string;
    province?: string;
    postal_code?: string;
    phone?: string;
    metadata?: Record<string, unknown>;
}
export declare class StorePostCustomersMeAddressesAddressReq {
    address_name?: string;
    is_default_shipping?: boolean;
    is_default_billing?: boolean;
    company?: string;
    first_name?: string;
    last_name?: string;
    address_1?: string;
    address_2?: string;
    city?: string;
    country_code?: string;
    province?: string;
    postal_code?: string;
    phone?: string;
    metadata?: Record<string, unknown>;
}
declare const StoreGetCustomersMeAddressesParams_base: import("../../..").ClassConstructor<FindParams & import("../../../types/common").FindPaginationParams>;
export declare class StoreGetCustomersMeAddressesParams extends StoreGetCustomersMeAddressesParams_base {
    address_name?: string | string[] | OperatorMap<string>;
    is_default_shipping?: boolean;
    is_default_billing?: boolean;
    company?: string | string[] | OperatorMap<string> | null;
    first_name?: string | string[] | OperatorMap<string> | null;
    last_name?: string | string[] | OperatorMap<string> | null;
    address_1?: string | string[] | OperatorMap<string> | null;
    address_2?: string | string[] | OperatorMap<string> | null;
    city?: string | string[] | OperatorMap<string> | null;
    country_code?: string | string[] | OperatorMap<string> | null;
    province?: string | string[] | OperatorMap<string> | null;
    postal_code?: string | string[] | OperatorMap<string> | null;
    phone?: string | string[] | OperatorMap<string> | null;
    metadata?: OperatorMap<Record<string, unknown>>;
}
export {};
