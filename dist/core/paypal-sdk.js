"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaypalSdk = void 0;
var types_1 = require("./types");
var paypal_http_client_1 = require("./paypal-http-client");
var PaypalSdk = /** @class */ (function () {
    function PaypalSdk(options) {
        this.httpClient_ = new paypal_http_client_1.PaypalHttpClient(options);
    }
    /**
     * Create a new order.
     * @param data
     */
    PaypalSdk.prototype.createOrder = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = types_1.PaypalApiPath.CREATE_ORDER;
                        return [4 /*yield*/, this.httpClient_.request({ url: url, data: data })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Retrieve an order.
     * @param orderId
     */
    PaypalSdk.prototype.getOrder = function (orderId) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = types_1.PaypalApiPath.GET_ORDER.replace("{id}", orderId);
                        return [4 /*yield*/, this.httpClient_.request({ url: url, method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Patch an order.
     * @param orderId
     * @param data
     */
    PaypalSdk.prototype.patchOrder = function (orderId, data) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = types_1.PaypalApiPath.PATCH_ORDER.replace("{id}", orderId);
                        return [4 /*yield*/, this.httpClient_.request({ url: url, method: "PATCH" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Authorizes payment for an order. To successfully authorize payment for an order,
     * the buyer must first approve the order or a valid payment_source must be provided in the request.
     * A buyer can approve the order upon being redirected to the rel:approve URL that was returned in the HATEOAS links in the create order response.
     * @param orderId
     */
    PaypalSdk.prototype.authorizeOrder = function (orderId) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = types_1.PaypalApiPath.AUTHORIZE_ORDER.replace("{id}", orderId);
                        return [4 /*yield*/, this.httpClient_.request({ url: url })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Refunds a captured payment, by ID. For a full refund, include an empty
     * payload in the JSON request body. For a partial refund, include an amount
     * object in the JSON request body.
     * @param paymentId
     * @param data
     */
    PaypalSdk.prototype.refundPayment = function (paymentId, data) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = types_1.PaypalApiPath.CAPTURE_REFUND.replace("{id}", paymentId);
                        return [4 /*yield*/, this.httpClient_.request({ url: url, data: data })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Voids, or cancels, an authorized payment, by ID. You cannot void an authorized payment that has been fully captured.
     * @param authorizationId
     */
    PaypalSdk.prototype.cancelAuthorizedPayment = function (authorizationId) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = types_1.PaypalApiPath.AUTHORIZATION_VOID.replace("{id}", authorizationId);
                        return [4 /*yield*/, this.httpClient_.request({ url: url })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Captures an authorized payment, by ID.
     * @param authorizationId
     * @param data
     */
    PaypalSdk.prototype.captureAuthorizedPayment = function (authorizationId, data) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = types_1.PaypalApiPath.AUTHORIZATION_CAPTURE.replace("{id}", authorizationId);
                        return [4 /*yield*/, this.httpClient_.request({ url: url, data: data })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Captures an authorized payment, by ID.
     * @param authorizationId
     */
    PaypalSdk.prototype.getAuthorizationPayment = function (authorizationId) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = types_1.PaypalApiPath.AUTHORIZATION_GET.replace("{id}", authorizationId);
                        return [4 /*yield*/, this.httpClient_.request({ url: url })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PaypalSdk.prototype.verifyWebhook = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = types_1.PaypalApiPath.VERIFY_WEBHOOK_SIGNATURE;
                        return [4 /*yield*/, this.httpClient_.request({ url: url, data: data })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return PaypalSdk;
}());
exports.PaypalSdk = PaypalSdk;
//# sourceMappingURL=paypal-sdk.js.map