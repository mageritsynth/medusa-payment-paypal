"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPriceSetPricesForModule = exports.buildPriceSetPricesForCore = exports.buildPriceSetRules = exports.buildPriceListRules = void 0;
function buildPriceListRules(priceListRules) {
    return priceListRules.reduce(function (acc, curr) {
        var ruleAttribute = curr.rule_type.rule_attribute;
        var ruleValues = curr.price_list_rule_values || [];
        acc[ruleAttribute] = ruleValues.map(function (ruleValue) { return ruleValue.value; });
        return acc;
    }, {});
}
exports.buildPriceListRules = buildPriceListRules;
function buildPriceSetRules(priceRules) {
    return priceRules.reduce(function (acc, curr) {
        var ruleAttribute = curr.rule_type.rule_attribute;
        var ruleValue = curr.value;
        acc[ruleAttribute] = ruleValue;
        return acc;
    }, {});
}
exports.buildPriceSetRules = buildPriceSetRules;
function buildPriceSetPricesForCore(priceSetMoneyAmounts) {
    return priceSetMoneyAmounts.map(function (priceSetMoneyAmount) {
        var _a;
        var productVariant = priceSetMoneyAmount.price_set.variant;
        var rules = priceSetMoneyAmount.price_rules
            ? buildPriceSetRules(priceSetMoneyAmount.price_rules)
            : {};
        return __assign(__assign({}, priceSetMoneyAmount.money_amount), { variant_id: (_a = productVariant === null || productVariant === void 0 ? void 0 : productVariant.id) !== null && _a !== void 0 ? _a : null, rules: rules });
    });
}
exports.buildPriceSetPricesForCore = buildPriceSetPricesForCore;
function buildPriceSetPricesForModule(priceSetMoneyAmounts) {
    return priceSetMoneyAmounts.map(function (priceSetMoneyAmount) {
        var _a;
        var rules = priceSetMoneyAmount.price_rules
            ? buildPriceSetRules(priceSetMoneyAmount.price_rules)
            : {};
        return __assign(__assign({}, priceSetMoneyAmount.money_amount), { price_set_id: (_a = priceSetMoneyAmount.price_set) === null || _a === void 0 ? void 0 : _a.id, rules: rules });
    });
}
exports.buildPriceSetPricesForModule = buildPriceSetPricesForModule;
//# sourceMappingURL=builders.js.map