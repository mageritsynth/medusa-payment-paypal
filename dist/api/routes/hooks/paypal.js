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
exports.default = (function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    function isPaymentCollection(id) {
        return id && id.startsWith("paycol");
    }
    function autorizeCart(req, cartId) {
        return __awaiter(this, void 0, void 0, function () {
            var manager, cartService, swapService, orderService;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        manager = req.scope.resolve("manager");
                        cartService = req.scope.resolve("cartService");
                        swapService = req.scope.resolve("swapService");
                        orderService = req.scope.resolve("orderService");
                        return [4 /*yield*/, manager.transaction(function (m) { return __awaiter(_this, void 0, void 0, function () {
                                var cart, _a, swap, order;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4 /*yield*/, cartService.withTransaction(m).retrieve(cartId)];
                                        case 1:
                                            cart = _b.sent();
                                            _a = cart.type;
                                            switch (_a) {
                                                case "swap": return [3 /*break*/, 2];
                                            }
                                            return [3 /*break*/, 8];
                                        case 2: return [4 /*yield*/, swapService
                                                .withTransaction(m)
                                                .retrieveByCartId(cartId)
                                                .catch(function (_) { return undefined; })];
                                        case 3:
                                            swap = _b.sent();
                                            if (!(swap && swap.confirmed_at === null)) return [3 /*break*/, 7];
                                            return [4 /*yield*/, cartService
                                                    .withTransaction(m)
                                                    .setPaymentSession(cartId, "paypal")];
                                        case 4:
                                            _b.sent();
                                            return [4 /*yield*/, cartService.withTransaction(m).authorizePayment(cartId)];
                                        case 5:
                                            _b.sent();
                                            return [4 /*yield*/, swapService.withTransaction(m).registerCartCompletion(swap.id)];
                                        case 6:
                                            _b.sent();
                                            _b.label = 7;
                                        case 7: return [3 /*break*/, 14];
                                        case 8: return [4 /*yield*/, orderService
                                                .withTransaction(m)
                                                .retrieveByCartId(cartId)
                                                .catch(function (_) { return undefined; })];
                                        case 9:
                                            order = _b.sent();
                                            if (!!order) return [3 /*break*/, 13];
                                            return [4 /*yield*/, cartService
                                                    .withTransaction(m)
                                                    .setPaymentSession(cartId, "paypal")];
                                        case 10:
                                            _b.sent();
                                            return [4 /*yield*/, cartService.withTransaction(m).authorizePayment(cartId)];
                                        case 11:
                                            _b.sent();
                                            return [4 /*yield*/, orderService.withTransaction(m).createFromCart(cartId)];
                                        case 12:
                                            _b.sent();
                                            _b.label = 13;
                                        case 13: return [3 /*break*/, 14];
                                        case 14: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    function autorizePaymentCollection(req, id, orderId) {
        return __awaiter(this, void 0, void 0, function () {
            var manager, paymentCollectionService;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        manager = req.scope.resolve("manager");
                        paymentCollectionService = req.scope.resolve("paymentCollectionService");
                        return [4 /*yield*/, manager.transaction(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, paymentCollectionService.withTransaction(manager).authorize(id)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    var auth_algo, cert_url, transmission_id, transmission_sig, transmission_time, paypalService, err_1, body, authId, auth, order, purchaseUnit, customId, orderId, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                auth_algo = req.headers["paypal-auth-algo"];
                cert_url = req.headers["paypal-cert-url"];
                transmission_id = req.headers["paypal-transmission-id"];
                transmission_sig = req.headers["paypal-transmission-sig"];
                transmission_time = req.headers["paypal-transmission-time"];
                paypalService = req.scope.resolve("paypalProviderService");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, paypalService.verifyWebhook({
                        auth_algo: auth_algo,
                        cert_url: cert_url,
                        transmission_id: transmission_id,
                        transmission_sig: transmission_sig,
                        transmission_time: transmission_time,
                        webhook_event: req.body,
                    })];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                res.sendStatus(401);
                return [2 /*return*/];
            case 4:
                _a.trys.push([4, 11, , 12]);
                body = req.body;
                authId = body.resource.id;
                return [4 /*yield*/, paypalService.retrieveAuthorization(authId)];
            case 5:
                auth = _a.sent();
                return [4 /*yield*/, paypalService.retrieveOrderFromAuth(auth)];
            case 6:
                order = _a.sent();
                if (!order) {
                    res.sendStatus(200);
                    return [2 /*return*/];
                }
                purchaseUnit = order.purchase_units[0];
                customId = purchaseUnit.custom_id;
                if (!customId) {
                    res.sendStatus(200);
                    return [2 /*return*/];
                }
                if (!isPaymentCollection(customId)) return [3 /*break*/, 8];
                orderId = order.id;
                return [4 /*yield*/, autorizePaymentCollection(req, customId, orderId)];
            case 7:
                _a.sent();
                return [3 /*break*/, 10];
            case 8: return [4 /*yield*/, autorizeCart(req, customId)];
            case 9:
                _a.sent();
                _a.label = 10;
            case 10:
                res.sendStatus(200);
                return [3 /*break*/, 12];
            case 11:
                err_2 = _a.sent();
                console.error(err_2);
                res.sendStatus(409);
                return [3 /*break*/, 12];
            case 12: return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=paypal.js.map