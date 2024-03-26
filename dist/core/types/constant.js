"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaypalApiPath = exports.PaypalEnvironmentPaths = void 0;
exports.PaypalEnvironmentPaths = {
    SANDBOX: "https://api-m.sandbox.paypal.com",
    LIVE: "https://api-m.paypal.com",
};
exports.PaypalApiPath = {
    AUTH: "/v1/oauth2/token",
    GET_ORDER: "/v2/checkout/orders/{id}",
    PATCH_ORDER: "/v2/checkout/orders/{id}",
    CREATE_ORDER: "/v2/checkout/orders",
    AUTHORIZE_ORDER: "/v2/checkout/orders/{id}/authorize",
    CAPTURE_REFUND: "/v2/payments/captures/{id}/refund",
    AUTHORIZATION_GET: "/v2/payments/authorizations/{id}",
    AUTHORIZATION_CAPTURE: "/v2/payments/authorizations/{id}/capture",
    AUTHORIZATION_VOID: "/v2/payments/authorizations/{id}/void",
    VERIFY_WEBHOOK_SIGNATURE: "/v1/notifications/verify-webhook-signature",
};
//# sourceMappingURL=constant.js.map