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
exports.listTransformQueryConfig = exports.retrieveTransformQueryConfig = exports.defaultAdminCustomerGroupFields = exports.allowedAdminCustomerGroupRelations = exports.defaultAdminCustomerGroupRelations = void 0;
exports.defaultAdminCustomerGroupRelations = [];
exports.allowedAdminCustomerGroupRelations = ["customers"];
exports.defaultAdminCustomerGroupFields = [
    "id",
    "name",
    "created_at",
    "updated_at",
    "deleted_at",
];
exports.retrieveTransformQueryConfig = {
    defaultFields: exports.defaultAdminCustomerGroupFields,
    defaultRelations: exports.defaultAdminCustomerGroupRelations,
    allowedRelations: exports.allowedAdminCustomerGroupRelations,
    isList: false,
};
exports.listTransformQueryConfig = __assign(__assign({}, exports.retrieveTransformQueryConfig), { isList: true });
//# sourceMappingURL=query-config.js.map