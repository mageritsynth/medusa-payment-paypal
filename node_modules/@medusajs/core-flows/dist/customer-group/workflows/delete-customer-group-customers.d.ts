import { GroupCustomerPair } from "@medusajs/types";
type WorkflowInput = {
    groupCustomers: GroupCustomerPair[];
};
export declare const deleteCustomerGroupCustomersWorkflowId = "delete-customer-group-customers";
export declare const deleteCustomerGroupCustomersWorkflow: import("@medusajs/workflows-sdk").ReturnWorkflow<WorkflowInput, void, Record<string, Function>>;
export {};
