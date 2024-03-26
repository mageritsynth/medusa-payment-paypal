"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var hooks_1 = __importDefault(require("./routes/hooks"));
exports.default = (function () {
    var app = (0, express_1.Router)();
    (0, hooks_1.default)(app);
    return app;
});
//# sourceMappingURL=index.js.map