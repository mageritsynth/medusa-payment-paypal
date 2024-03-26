import { CreateOrder, CreateOrderResponse, GetOrderResponse, PatchOrder, PaypalSdkOptions } from "./types";
import { CaptureAuthorizedPayment, CapturesAuthorizationResponse, CapturesRefundResponse, GetAuthorizationPaymentResponse, RefundPayment } from "./types/payment";
import { PaypalHttpClient } from "./paypal-http-client";
import { VerifyWebhookSignature } from "./types/webhook";
export declare class PaypalSdk {
    protected readonly httpClient_: PaypalHttpClient;
    constructor(options: PaypalSdkOptions);
    /**
     * Create a new order.
     * @param data
     */
    createOrder(data: CreateOrder): Promise<CreateOrderResponse>;
    /**
     * Retrieve an order.
     * @param orderId
     */
    getOrder(orderId: string): Promise<GetOrderResponse>;
    /**
     * Patch an order.
     * @param orderId
     * @param data
     */
    patchOrder(orderId: string, data?: PatchOrder[]): Promise<void>;
    /**
     * Authorizes payment for an order. To successfully authorize payment for an order,
     * the buyer must first approve the order or a valid payment_source must be provided in the request.
     * A buyer can approve the order upon being redirected to the rel:approve URL that was returned in the HATEOAS links in the create order response.
     * @param orderId
     */
    authorizeOrder(orderId: string): Promise<CreateOrderResponse>;
    /**
     * Refunds a captured payment, by ID. For a full refund, include an empty
     * payload in the JSON request body. For a partial refund, include an amount
     * object in the JSON request body.
     * @param paymentId
     * @param data
     */
    refundPayment(paymentId: string, data?: RefundPayment): Promise<CapturesRefundResponse>;
    /**
     * Voids, or cancels, an authorized payment, by ID. You cannot void an authorized payment that has been fully captured.
     * @param authorizationId
     */
    cancelAuthorizedPayment(authorizationId: string): Promise<void>;
    /**
     * Captures an authorized payment, by ID.
     * @param authorizationId
     * @param data
     */
    captureAuthorizedPayment(authorizationId: string, data?: CaptureAuthorizedPayment): Promise<CapturesAuthorizationResponse>;
    /**
     * Captures an authorized payment, by ID.
     * @param authorizationId
     */
    getAuthorizationPayment(authorizationId: string): Promise<GetAuthorizationPaymentResponse>;
    verifyWebhook(data: VerifyWebhookSignature): Promise<unknown>;
}
