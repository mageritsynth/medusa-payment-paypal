import { FilterableCustomerAddressProps, CustomerAddressDTO } from "@medusajs/types";
type WorkflowInput = {
    selector: FilterableCustomerAddressProps;
    update: Partial<CustomerAddressDTO>;
};
export declare const updateCustomerAddressesWorkflowId = "update-customer-addresses";
export declare const updateCustomerAddressesWorkflow: import("@medusajs/workflows-sdk").ReturnWorkflow<WorkflowInput, CustomerAddressDTO[], Record<string, Function>>;
export {};
