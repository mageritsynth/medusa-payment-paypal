"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decorateCartTotals = exports.getLineItemTotals = exports.getShippingMethodTotals_ = exports.getShippingMethodTotals = void 0;
var bignumber_js_1 = require("bignumber.js");
var big_number_1 = require("./big-number");
var to_big_number_js_1 = require("./to-big-number-js");
__exportStar(require("./math"), exports);
__exportStar(require("./promotion"), exports);
__exportStar(require("./to-big-number-js"), exports);
__exportStar(require("./transform-properties-to-bignumber"), exports);
function getShippingMethodTotals(shippingMethods, context) {
    var e_1, _a;
    var includeTax = context.includeTax;
    var shippingMethodsTotals = {};
    try {
        for (var shippingMethods_1 = __values(shippingMethods), shippingMethods_1_1 = shippingMethods_1.next(); !shippingMethods_1_1.done; shippingMethods_1_1 = shippingMethods_1.next()) {
            var shippingMethod = shippingMethods_1_1.value;
            shippingMethodsTotals[shippingMethod.id] = getShippingMethodTotals_(shippingMethod, {
                includeTax: includeTax,
            });
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (shippingMethods_1_1 && !shippingMethods_1_1.done && (_a = shippingMethods_1.return)) _a.call(shippingMethods_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return shippingMethodsTotals;
}
exports.getShippingMethodTotals = getShippingMethodTotals;
function getShippingMethodTotals_(shippingMethod, context) {
    var _a;
    var _b = (0, to_big_number_js_1.toBigNumberJs)(shippingMethod, [
        "amount",
        "tax_total",
        "original_tax_total",
    ]), amount = _b.amount, taxTotal = _b.taxTotal, originalTaxTotal = _b.originalTaxTotal;
    var amountBn = new big_number_1.BigNumber(amount);
    var totals = {
        amount: amountBn,
        total: amountBn,
        original_total: amountBn,
        subtotal: amountBn,
        tax_total: new big_number_1.BigNumber(taxTotal),
        original_tax_total: new big_number_1.BigNumber(originalTaxTotal),
    };
    var isTaxInclusive = (_a = context.includeTax) !== null && _a !== void 0 ? _a : shippingMethod.is_tax_inclusive;
    if (isTaxInclusive) {
        var subtotal = amount.minus(taxTotal);
        totals.subtotal = new big_number_1.BigNumber(subtotal);
    }
    else {
        var originalTotal = amount.plus(originalTaxTotal);
        var total = amount.plus(taxTotal);
        totals.original_total = new big_number_1.BigNumber(originalTotal);
        totals.total = new big_number_1.BigNumber(total);
    }
    return totals;
}
exports.getShippingMethodTotals_ = getShippingMethodTotals_;
function getLineItemTotals(items, context) {
    var e_2, _a;
    var itemsTotals = {};
    try {
        for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
            var item = items_1_1.value;
            itemsTotals[item.id] = getTotalsForSingleLineItem(item, {
                includeTax: context.includeTax,
            });
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return itemsTotals;
}
exports.getLineItemTotals = getLineItemTotals;
function getTotalsForSingleLineItem(item, context) {
    var _a;
    var _b = (0, to_big_number_js_1.toBigNumberJs)(item, [
        "unit_price",
        "tax_total",
        "original_tax_total",
    ]), unitPrice = _b.unitPrice, taxTotal = _b.taxTotal, originalTaxTotal = _b.originalTaxTotal;
    var subtotal = unitPrice.times(item.quantity);
    var discountTotal = (0, bignumber_js_1.BigNumber)(0);
    var total = subtotal.minus(discountTotal);
    var totals = {
        quantity: item.quantity,
        unit_price: item.unit_price,
        subtotal: new big_number_1.BigNumber(subtotal),
        total: new big_number_1.BigNumber(total),
        original_total: new big_number_1.BigNumber(subtotal),
        discount_total: new big_number_1.BigNumber(discountTotal),
        tax_total: new big_number_1.BigNumber(taxTotal),
        original_tax_total: new big_number_1.BigNumber(originalTaxTotal),
    };
    var isTaxInclusive = (_a = context.includeTax) !== null && _a !== void 0 ? _a : item.is_tax_inclusive;
    if (isTaxInclusive) {
        var subtotal_1 = unitPrice.times(totals.quantity).minus(originalTaxTotal);
        var subtotalBn = new big_number_1.BigNumber(subtotal_1);
        totals.subtotal = subtotalBn;
        totals.total = subtotalBn;
        totals.original_total = subtotalBn;
    }
    else {
        var newTotal = total.plus(taxTotal);
        var originalTotal = subtotal.plus(originalTaxTotal);
        totals.total = new big_number_1.BigNumber(newTotal);
        totals.original_total = new big_number_1.BigNumber(originalTotal);
    }
    return totals;
}
function decorateCartTotals(_a, totalsConfig) {
    var _b = _a.shippingMethods, shippingMethods = _b === void 0 ? [] : _b, _c = _a.items, items = _c === void 0 ? [] : _c;
    if (totalsConfig === void 0) { totalsConfig = {}; }
    var cart = {};
    var includeTax = totalsConfig === null || totalsConfig === void 0 ? void 0 : totalsConfig.includeTaxes;
    var itemsTotals = getLineItemTotals(items, {
        includeTax: includeTax,
    });
    var shippingMethodsTotals = getShippingMethodTotals(shippingMethods, {
        includeTax: includeTax,
    });
    var subtotal = (0, bignumber_js_1.BigNumber)(0);
    var discountTotal = (0, bignumber_js_1.BigNumber)(0);
    var itemTaxTotal = (0, bignumber_js_1.BigNumber)(0);
    var shippingTotal = (0, bignumber_js_1.BigNumber)(0);
    var shippingTaxTotal = (0, bignumber_js_1.BigNumber)(0);
    cart.items = items.map(function (item) {
        var _a;
        var itemTotals = Object.assign(item, (_a = itemsTotals[item.id]) !== null && _a !== void 0 ? _a : {});
        var subtotal = (0, bignumber_js_1.BigNumber)(itemTotals.subtotal.raw.value);
        var discountTotal = (0, bignumber_js_1.BigNumber)(itemTotals.discount_total.raw.value);
        var itemTaxTotal = (0, bignumber_js_1.BigNumber)(itemTotals.tax_total.raw.value);
        subtotal.plus(subtotal);
        discountTotal.plus(discountTotal);
        itemTaxTotal.plus(itemTaxTotal);
        return itemTotals;
    });
    cart.shipping_methods = shippingMethods.map(function (shippingMethod) {
        var _a;
        var methodTotals = Object.assign(shippingMethod, (_a = shippingMethodsTotals[shippingMethod.id]) !== null && _a !== void 0 ? _a : {});
        var total = (0, bignumber_js_1.BigNumber)(methodTotals.total.raw.value);
        var methodTaxTotal = (0, bignumber_js_1.BigNumber)(methodTotals.tax_total.raw.value);
        shippingTotal.plus(total);
        shippingTaxTotal.plus(methodTaxTotal);
        return methodTotals;
    });
    var taxTotal = itemTaxTotal.plus(shippingTaxTotal);
    // TODO: Discount + Gift Card calculations
    // TODO: subtract (cart.gift_card_total + cart.discount_total + cart.gift_card_tax_total)
    var total = subtotal.plus(shippingTotal).plus(shippingTotal).plus(taxTotal);
    cart.total = new big_number_1.BigNumber(total);
    cart.subtotal = new big_number_1.BigNumber(subtotal);
    cart.discount_total = new big_number_1.BigNumber(discountTotal);
    cart.item_tax_total = new big_number_1.BigNumber(itemTaxTotal);
    cart.shipping_total = new big_number_1.BigNumber(shippingTotal);
    cart.shipping_tax_total = new big_number_1.BigNumber(shippingTaxTotal);
    cart.tax_total = new big_number_1.BigNumber(taxTotal);
    // cart.discount_total = Math.round(cart.discount_total)
    // cart.gift_card_total = giftCardTotal.total || 0
    // cart.gift_card_tax_total = giftCardTotal.tax_total || 0
    return cart;
}
exports.decorateCartTotals = decorateCartTotals;
//# sourceMappingURL=index.js.map