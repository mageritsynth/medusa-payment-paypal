"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var body_parser_1 = __importDefault(require("body-parser"));
var medusa_1 = require("@medusajs/medusa");
var paypal_1 = __importDefault(require("./paypal"));
var route = (0, express_1.Router)();
exports.default = (function (app) {
    app.use("/paypal/hooks", route);
    route.use(body_parser_1.default.json());
    route.post("/", (0, medusa_1.wrapHandler)(paypal_1.default));
    return app;
});
//# sourceMappingURL=index.js.map