import { OperatorMap } from "@medusajs/types";
import { FindParams } from "../../../types/common";
export declare class AdminGetCustomerGroupsGroupParams extends FindParams {
}
declare class FilterableCustomerPropsValidator {
    id?: string | string[];
    email?: string | string[] | OperatorMap<string>;
    default_billing_address_id?: string | string[] | null;
    default_shipping_address_id?: string | string[] | null;
    company_name?: string | string[] | OperatorMap<string> | null;
    first_name?: string | string[] | OperatorMap<string> | null;
    last_name?: string | string[] | OperatorMap<string> | null;
    created_by?: string | string[] | null;
    created_at?: OperatorMap<string>;
    updated_at?: OperatorMap<string>;
}
declare const AdminGetCustomerGroupsParams_base: import("../../..").ClassConstructor<FindParams & import("../../../types/common").FindPaginationParams>;
export declare class AdminGetCustomerGroupsParams extends AdminGetCustomerGroupsParams_base {
    id?: string | string[];
    name?: string | OperatorMap<string>;
    customers?: FilterableCustomerPropsValidator | string | string[];
    created_by?: string | string[] | null;
    created_at?: OperatorMap<string>;
    updated_at?: OperatorMap<string>;
    $and?: AdminGetCustomerGroupsParams[];
    $or?: AdminGetCustomerGroupsParams[];
}
export declare class AdminPostCustomerGroupsReq {
    name: string;
}
export declare class AdminPostCustomerGroupsGroupReq {
    name?: string;
}
declare const AdminGetCustomerGroupsGroupCustomersParams_base: import("../../..").ClassConstructor<FindParams & import("../../../types/common").FindPaginationParams>;
export declare class AdminGetCustomerGroupsGroupCustomersParams extends AdminGetCustomerGroupsGroupCustomersParams_base {
    id?: string | string[];
    email?: string | string[] | OperatorMap<string>;
    company_name?: string | string[] | OperatorMap<string> | null;
    first_name?: string | string[] | OperatorMap<string> | null;
    last_name?: string | string[] | OperatorMap<string> | null;
    created_by?: string | string[] | null;
    created_at?: OperatorMap<string>;
    updated_at?: OperatorMap<string>;
}
declare class CustomerGroupsBatchCustomer {
    id: string;
}
export declare class AdminDeleteCustomerGroupsGroupCustomersBatchReq {
    customer_ids: CustomerGroupsBatchCustomer[];
}
export declare class AdminPostCustomerGroupsGroupCustomersBatchReq {
    customer_ids: CustomerGroupsBatchCustomer[];
}
export {};
