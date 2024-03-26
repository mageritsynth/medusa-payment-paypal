"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roundToTwo = void 0;
var medusa_core_utils_1 = require("medusa-core-utils");
function roundToTwo(num, currency) {
    if (medusa_core_utils_1.zeroDecimalCurrencies.includes(currency.toLowerCase())) {
        return "".concat(num);
    }
    return num.toFixed(2);
}
exports.roundToTwo = roundToTwo;
//# sourceMappingURL=utils.js.map