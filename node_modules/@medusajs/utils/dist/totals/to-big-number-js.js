"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBigNumberJs = void 0;
var bignumber_js_1 = require("bignumber.js");
var common_1 = require("../common");
function toBigNumberJs(entity, fields) {
    return fields.reduce(function (acc, field) {
        var _a, _b;
        var camelCased = (0, common_1.toCamelCase)(field);
        var val = 0;
        if ((0, common_1.isDefined)(entity[field])) {
            var entityField = entity[field];
            val = ((_b = (_a = entityField === null || entityField === void 0 ? void 0 : entityField.raw) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : entityField);
        }
        acc[camelCased] = new bignumber_js_1.BigNumber(val);
        return acc;
    }, {});
}
exports.toBigNumberJs = toBigNumberJs;
//# sourceMappingURL=to-big-number-js.js.map