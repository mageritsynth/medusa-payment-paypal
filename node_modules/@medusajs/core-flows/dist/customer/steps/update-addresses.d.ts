import { CustomerAddressDTO, FilterableCustomerAddressProps } from "@medusajs/types";
type UpdateCustomerAddresseStepInput = {
    selector: FilterableCustomerAddressProps;
    update: Partial<CustomerAddressDTO>;
};
export declare const updateCustomerAddresseStepId = "update-customer-addresses";
export declare const updateCustomerAddressesStep: import("@medusajs/workflows-sdk").StepFunction<UpdateCustomerAddresseStepInput, CustomerAddressDTO[]>;
export {};
