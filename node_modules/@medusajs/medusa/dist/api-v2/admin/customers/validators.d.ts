import { OperatorMap } from "@medusajs/types";
import { FindParams } from "../../../types/common";
export declare class AdminGetCustomersCustomerParams extends FindParams {
}
declare const AdminGetCustomersParams_base: import("../../..").ClassConstructor<FindParams & import("../../../types/common").FindPaginationParams>;
export declare class AdminGetCustomersParams extends AdminGetCustomersParams_base {
    id?: string | string[];
    email?: string | string[] | OperatorMap<string>;
    groups?: FilterableCustomerGroupPropsValidator | string | string[];
    company_name?: string | string[] | OperatorMap<string> | null;
    first_name?: string | string[] | OperatorMap<string> | null;
    last_name?: string | string[] | OperatorMap<string> | null;
    created_by?: string | string[] | null;
    created_at?: OperatorMap<string>;
    updated_at?: OperatorMap<string>;
    $and?: AdminGetCustomersParams[];
    $or?: AdminGetCustomersParams[];
}
declare class FilterableCustomerGroupPropsValidator {
    id?: string | string[];
    name?: string | OperatorMap<string>;
    created_by?: string | string[] | null;
    created_at?: OperatorMap<string>;
    updated_at?: OperatorMap<string>;
}
export declare class AdminPostCustomersReq {
    company_name?: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: string;
}
export declare class AdminPostCustomersCustomerReq {
    company_name?: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: string;
}
export declare class AdminPostCustomersCustomerAddressesReq {
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
export declare class AdminPostCustomersCustomerAddressesAddressReq {
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
declare const AdminGetCustomersCustomerAddressesParams_base: import("../../..").ClassConstructor<FindParams & import("../../../types/common").FindPaginationParams>;
export declare class AdminGetCustomersCustomerAddressesParams extends AdminGetCustomersCustomerAddressesParams_base {
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
