import { CreateCustomerAddressDTO, CustomerAddressDTO, FilterableCustomerAddressProps } from "@medusajs/types";
type StepInput = {
    create?: CreateCustomerAddressDTO[];
    update?: {
        selector: FilterableCustomerAddressProps;
        update: Partial<CustomerAddressDTO>;
    };
};
export declare const maybeUnsetDefaultShippingAddressesStepId = "maybe-unset-default-shipping-customer-addresses";
export declare const maybeUnsetDefaultShippingAddressesStep: import("@medusajs/workflows-sdk").StepFunction<StepInput, undefined>;
export {};
