"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var os_1 = require("os");
var medusa_1 = require("@medusajs/medusa");
var types_1 = require("../types");
var medusa_core_utils_1 = require("medusa-core-utils");
var utils_1 = require("./utils/utils");
var core_1 = require("../core");
var utils_2 = require("@medusajs/utils");
var PayPalProviderService = /** @class */ (function (_super) {
    __extends(PayPalProviderService, _super);
    function PayPalProviderService(_a, options) {
        var logger = _a.logger;
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.logger_ = logger;
        _this.options_ = options;
        _this.init();
        return _this;
    }
    PayPalProviderService.prototype.init = function () {
        this.paypal_ = new core_1.PaypalSdk(__assign(__assign({}, this.options_), { logger: this.logger_ }));
    };
    PayPalProviderService.prototype.getPaymentStatus = function (paymentSessionData) {
        return __awaiter(this, void 0, void 0, function () {
            var order;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.retrievePayment(paymentSessionData)];
                    case 1:
                        order = (_a.sent());
                        switch (order.status) {
                            case types_1.PaypalOrderStatus.CREATED:
                                return [2 /*return*/, medusa_1.PaymentSessionStatus.PENDING];
                            case types_1.PaypalOrderStatus.SAVED:
                            case types_1.PaypalOrderStatus.APPROVED:
                            case types_1.PaypalOrderStatus.PAYER_ACTION_REQUIRED:
                                return [2 /*return*/, medusa_1.PaymentSessionStatus.REQUIRES_MORE];
                            case types_1.PaypalOrderStatus.VOIDED:
                                return [2 /*return*/, medusa_1.PaymentSessionStatus.CANCELED];
                            case types_1.PaypalOrderStatus.COMPLETED:
                                return [2 /*return*/, medusa_1.PaymentSessionStatus.AUTHORIZED];
                            default:
                                return [2 /*return*/, medusa_1.PaymentSessionStatus.PENDING];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PayPalProviderService.prototype.initiatePayment = function (context) {
        return __awaiter(this, void 0, void 0, function () {
            var currency_code, amount, resource_id, session_data, intent, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currency_code = context.currency_code, amount = context.amount, resource_id = context.resource_id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        intent = this.options_.capture
                            ? "CAPTURE"
                            : "AUTHORIZE";
                        return [4 /*yield*/, this.paypal_.createOrder({
                                intent: intent,
                                purchase_units: [
                                    {
                                        custom_id: resource_id,
                                        amount: {
                                            currency_code: currency_code.toUpperCase(),
                                            value: (0, utils_1.roundToTwo)((0, medusa_core_utils_1.humanizeAmount)(amount, currency_code), currency_code),
                                        },
                                    },
                                ],
                            })];
                    case 2:
                        session_data = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        return [2 /*return*/, this.buildError("An error occurred in initiatePayment", e_1)];
                    case 4: return [2 /*return*/, {
                            session_data: session_data,
                        }];
                }
            });
        });
    };
    PayPalProviderService.prototype.authorizePayment = function (paymentSessionData, context) {
        return __awaiter(this, void 0, void 0, function () {
            var stat, order, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getPaymentStatus(paymentSessionData)];
                    case 1:
                        stat = _a.sent();
                        return [4 /*yield*/, this.retrievePayment(paymentSessionData)];
                    case 2:
                        order = (_a.sent());
                        return [2 /*return*/, { data: order, status: stat }];
                    case 3:
                        error_1 = _a.sent();
                        return [2 /*return*/, this.buildError("An error occurred in authorizePayment", error_1)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PayPalProviderService.prototype.cancelPayment = function (paymentSessionData) {
        return __awaiter(this, void 0, void 0, function () {
            var order, isAlreadyCanceled, isCanceledAndFullyRefund, purchase_units, isAlreadyCaptured, payments, payId, id, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.retrievePayment(paymentSessionData)];
                    case 1:
                        order = (_a.sent());
                        isAlreadyCanceled = order.status === types_1.PaypalOrderStatus.VOIDED;
                        isCanceledAndFullyRefund = order.status === types_1.PaypalOrderStatus.COMPLETED && !!order.invoice_id;
                        if (isAlreadyCanceled || isCanceledAndFullyRefund) {
                            return [2 /*return*/, order];
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 8, , 9]);
                        purchase_units = paymentSessionData.purchase_units;
                        isAlreadyCaptured = purchase_units.some(function (pu) { var _a; return (_a = pu.payments.captures) === null || _a === void 0 ? void 0 : _a.length; });
                        if (!isAlreadyCaptured) return [3 /*break*/, 4];
                        payments = purchase_units[0].payments;
                        payId = payments.captures[0].id;
                        return [4 /*yield*/, this.paypal_.refundPayment(payId)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        id = purchase_units[0].payments.authorizations[0].id;
                        return [4 /*yield*/, this.paypal_.cancelAuthorizedPayment(id)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [4 /*yield*/, this.retrievePayment(paymentSessionData)];
                    case 7: return [2 /*return*/, (_a.sent())];
                    case 8:
                        error_2 = _a.sent();
                        return [2 /*return*/, this.buildError("An error occurred in cancelPayment", error_2)];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    PayPalProviderService.prototype.capturePayment = function (paymentSessionData) {
        return __awaiter(this, void 0, void 0, function () {
            var purchase_units, id, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        purchase_units = paymentSessionData.purchase_units;
                        id = purchase_units[0].payments.authorizations[0].id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.paypal_.captureAuthorizedPayment(id)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.retrievePayment(paymentSessionData)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        error_3 = _a.sent();
                        return [2 /*return*/, this.buildError("An error occurred in capturePayment", error_3)];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Paypal does not provide such feature
     * @param paymentSessionData
     */
    PayPalProviderService.prototype.deletePayment = function (paymentSessionData) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, paymentSessionData];
            });
        });
    };
    PayPalProviderService.prototype.refundPayment = function (paymentSessionData, refundAmount) {
        return __awaiter(this, void 0, void 0, function () {
            var purchase_units, purchaseUnit, payments, isAlreadyCaptured, paymentId, currencyCode, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        purchase_units = paymentSessionData.purchase_units;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        purchaseUnit = purchase_units[0];
                        payments = purchaseUnit.payments;
                        isAlreadyCaptured = purchase_units.some(function (pu) { var _a; return (_a = pu.payments.captures) === null || _a === void 0 ? void 0 : _a.length; });
                        if (!isAlreadyCaptured) {
                            throw new Error("Cannot refund an uncaptured payment");
                        }
                        paymentId = payments.captures[0].id;
                        currencyCode = purchaseUnit.amount.currency_code;
                        return [4 /*yield*/, this.paypal_.refundPayment(paymentId, {
                                amount: {
                                    currency_code: currencyCode,
                                    value: (0, utils_1.roundToTwo)((0, medusa_core_utils_1.humanizeAmount)(refundAmount, currencyCode), currencyCode),
                                },
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.retrievePayment(paymentSessionData)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        error_4 = _a.sent();
                        return [2 /*return*/, this.buildError("An error occurred in refundPayment", error_4)];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    PayPalProviderService.prototype.retrievePayment = function (paymentSessionData) {
        return __awaiter(this, void 0, void 0, function () {
            var id, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = paymentSessionData.id;
                        return [4 /*yield*/, this.paypal_.getOrder(id)];
                    case 1: return [2 /*return*/, (_a.sent())];
                    case 2:
                        e_2 = _a.sent();
                        return [2 /*return*/, this.buildError("An error occurred in retrievePayment", e_2)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PayPalProviderService.prototype.updatePayment = function (context) {
        return __awaiter(this, void 0, void 0, function () {
            var currency_code, amount, id, error_5;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        currency_code = context.currency_code, amount = context.amount;
                        id = context.paymentSessionData.id;
                        return [4 /*yield*/, this.paypal_.patchOrder(id, [
                                {
                                    op: "replace",
                                    path: "/purchase_units/@reference_id=='default'",
                                    value: {
                                        amount: {
                                            currency_code: currency_code.toUpperCase(),
                                            value: (0, utils_1.roundToTwo)((0, medusa_core_utils_1.humanizeAmount)(amount, currency_code), currency_code),
                                        },
                                    },
                                },
                            ])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, { session_data: context.paymentSessionData }];
                    case 2:
                        error_5 = _a.sent();
                        return [4 /*yield*/, this.initiatePayment(context).catch(function (e) {
                                return _this.buildError("An error occurred in updatePayment", e);
                            })];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PayPalProviderService.prototype.updatePaymentData = function (sessionId, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    // Prevent from updating the amount from here as it should go through
                    // the updatePayment method to perform the correct logic
                    if (data.amount) {
                        throw new utils_2.MedusaError(utils_2.MedusaError.Types.INVALID_DATA, "Cannot update amount, use updatePayment instead");
                    }
                    return [2 /*return*/, data];
                }
                catch (e) {
                    return [2 /*return*/, this.buildError("An error occurred in updatePaymentData", e)];
                }
                return [2 /*return*/];
            });
        });
    };
    PayPalProviderService.prototype.retrieveOrderFromAuth = function (authorization) {
        return __awaiter(this, void 0, void 0, function () {
            var link, parts, orderId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        link = authorization.links.find(function (l) { return l.rel === "up"; });
                        parts = link.href.split("/");
                        orderId = parts[parts.length - 1];
                        if (!orderId) {
                            return [2 /*return*/, null];
                        }
                        return [4 /*yield*/, this.paypal_.getOrder(orderId)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PayPalProviderService.prototype.retrieveAuthorization = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.paypal_.getAuthorizationPayment(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PayPalProviderService.prototype.buildError = function (message, e) {
        var _a, _b;
        return {
            error: message,
            code: "code" in e ? e.code : "",
            detail: (0, medusa_1.isPaymentProcessorError)(e)
                ? "".concat(e.error).concat(os_1.EOL).concat((_a = e.detail) !== null && _a !== void 0 ? _a : "")
                : (_b = e.message) !== null && _b !== void 0 ? _b : "",
        };
    };
    /**
     * Checks if a webhook is verified.
     * @param {object} data - the verficiation data.
     * @returns {Promise<object>} the response of the verification request.
     */
    PayPalProviderService.prototype.verifyWebhook = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.paypal_.verifyWebhook(__assign({ webhook_id: this.options_.auth_webhook_id || this.options_.authWebhookId }, data))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PayPalProviderService.identifier = "paypal";
    return PayPalProviderService;
}(medusa_1.AbstractPaymentProcessor));
exports.default = PayPalProviderService;
//# sourceMappingURL=paypal-provider.js.map