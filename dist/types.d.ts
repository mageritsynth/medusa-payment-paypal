export interface PaypalOptions {
    sandbox?: boolean;
    clientId: string;
    clientSecret: string;
    authWebhookId: string;
    capture?: boolean;
    /**
     * @deprecated use clientId instead
     */
    client_id: string;
    /**
     * @deprecated use clientSecret instead
     */
    client_secret: string;
    /**
     * @deprecated use authWebhookId instead
     */
    auth_webhook_id: string;
}
export type PaypalOrder = {
    status: keyof typeof PaypalOrderStatus;
    invoice_id: string;
};
export type PurchaseUnits = {
    payments: {
        captures: {
            id: string;
        }[];
        authorizations: {
            id: string;
        }[];
    };
    amount: {
        currency_code: string;
        value: string;
    };
}[];
export declare const PaypalOrderStatus: {
    CREATED: string;
    COMPLETED: string;
    SAVED: string;
    APPROVED: string;
    PAYER_ACTION_REQUIRED: string;
    VOIDED: string;
};
