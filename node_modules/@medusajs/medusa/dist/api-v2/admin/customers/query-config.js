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
exports.listAddressesTransformQueryConfig = exports.retrieveAddressTransformQueryConfig = exports.defaultAdminCustomerAddressFields = exports.allowedAdminCustomerAddressRelations = exports.defaultAdminCustomerAddressRelations = exports.listTransformQueryConfig = exports.retrieveTransformQueryConfig = exports.defaultAdminCustomerFields = exports.allowedAdminCustomerRelations = exports.defaultAdminCustomerRelations = void 0;
exports.defaultAdminCustomerRelations = [];
exports.allowedAdminCustomerRelations = ["groups", "addresses"];
exports.defaultAdminCustomerFields = [
    "id",
    "company_name",
    "first_name",
    "last_name",
    "email",
    "created_at",
    "updated_at",
    "deleted_at",
];
exports.retrieveTransformQueryConfig = {
    defaultFields: exports.defaultAdminCustomerFields,
    defaultRelations: exports.defaultAdminCustomerRelations,
    allowedRelations: exports.allowedAdminCustomerRelations,
    isList: false,
};
exports.listTransformQueryConfig = __assign(__assign({}, exports.retrieveTransformQueryConfig), { isList: true });
exports.defaultAdminCustomerAddressRelations = [];
exports.allowedAdminCustomerAddressRelations = ["customer"];
exports.defaultAdminCustomerAddressFields = [
    "id",
    "company",
    "customer_id",
    "first_name",
    "last_name",
    "address_1",
    "address_2",
    "city",
    "province",
    "postal_code",
    "country_code",
    "phone",
    "metadata",
    "created_at",
    "updated_at",
];
exports.retrieveAddressTransformQueryConfig = {
    defaultFields: exports.defaultAdminCustomerAddressFields,
    defaultRelations: exports.defaultAdminCustomerAddressRelations,
    allowedRelations: exports.allowedAdminCustomerAddressRelations,
    isList: false,
};
exports.listAddressesTransformQueryConfig = __assign(__assign({}, exports.retrieveAddressTransformQueryConfig), { isList: true });
//# sourceMappingURL=query-config.js.map