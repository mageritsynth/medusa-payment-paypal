import { AbstractPaymentProcessor, PaymentProcessorContext, PaymentProcessorError, PaymentProcessorSessionResponse, PaymentSessionStatus } from "@medusajs/medusa";
import { PaypalOptions } from "../types";
import { PaypalSdk } from "../core";
import { Logger } from "@medusajs/types";
declare class PayPalProviderService extends AbstractPaymentProcessor {
    static identifier: string;
    protected readonly options_: PaypalOptions;
    protected paypal_: PaypalSdk;
    protected readonly logger_: Logger | undefined;
    constructor({ logger }: {
        logger?: Logger;
    }, options: any);
    protected init(): void;
    getPaymentStatus(paymentSessionData: Record<string, unknown>): Promise<PaymentSessionStatus>;
    initiatePayment(context: PaymentProcessorContext): Promise<PaymentProcessorError | PaymentProcessorSessionResponse>;
    authorizePayment(paymentSessionData: Record<string, unknown>, context: Record<string, unknown>): Promise<PaymentProcessorError | {
        status: PaymentSessionStatus;
        data: PaymentProcessorSessionResponse["session_data"];
    }>;
    cancelPayment(paymentSessionData: Record<string, unknown>): Promise<PaymentProcessorError | PaymentProcessorSessionResponse["session_data"]>;
    capturePayment(paymentSessionData: Record<string, unknown>): Promise<PaymentProcessorError | PaymentProcessorSessionResponse["session_data"]>;
    /**
     * Paypal does not provide such feature
     * @param paymentSessionData
     */
    deletePayment(paymentSessionData: Record<string, unknown>): Promise<PaymentProcessorError | PaymentProcessorSessionResponse["session_data"]>;
    refundPayment(paymentSessionData: Record<string, unknown>, refundAmount: number): Promise<PaymentProcessorError | PaymentProcessorSessionResponse["session_data"]>;
    retrievePayment(paymentSessionData: Record<string, unknown>): Promise<PaymentProcessorError | PaymentProcessorSessionResponse["session_data"]>;
    updatePayment(context: PaymentProcessorContext): Promise<PaymentProcessorError | PaymentProcessorSessionResponse | void>;
    updatePaymentData(sessionId: string, data: Record<string, unknown>): Promise<Record<string, unknown> | PaymentProcessorError>;
    retrieveOrderFromAuth(authorization: any): Promise<import("../core").GetOrderResponse | null>;
    retrieveAuthorization(id: any): Promise<import("../core/types/payment").GetAuthorizationPaymentResponse>;
    protected buildError(message: string, e: PaymentProcessorError | Error): PaymentProcessorError;
    /**
     * Checks if a webhook is verified.
     * @param {object} data - the verficiation data.
     * @returns {Promise<object>} the response of the verification request.
     */
    verifyWebhook(data: any): Promise<unknown>;
}
export default PayPalProviderService;
