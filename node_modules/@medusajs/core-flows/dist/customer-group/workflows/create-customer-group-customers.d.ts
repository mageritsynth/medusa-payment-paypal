import { GroupCustomerPair } from "@medusajs/types";
type WorkflowInput = {
    groupCustomers: GroupCustomerPair[];
};
export declare const createCustomerGroupCustomersWorkflowId = "create-customer-group-customers";
export declare const createCustomerGroupCustomersWorkflow: import("@medusajs/workflows-sdk").ReturnWorkflow<WorkflowInput, {
    id: string;
}[], Record<string, Function>>;
export {};
