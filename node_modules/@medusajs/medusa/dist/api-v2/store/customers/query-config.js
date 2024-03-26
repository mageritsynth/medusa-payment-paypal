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
exports.listAddressesTransformQueryConfig = exports.retrieveAddressTransformQueryConfig = exports.defaultStoreCustomerAddressFields = exports.allowedStoreCustomerAddressRelations = exports.defaultStoreCustomerAddressRelations = exports.retrieveTransformQueryConfig = exports.defaultStoreCustomersFields = exports.allowedStoreCustomersRelations = exports.defaultStoreCustomersRelations = void 0;
exports.defaultStoreCustomersRelations = [];
exports.allowedStoreCustomersRelations = ["addresses", "groups"];
exports.defaultStoreCustomersFields = [
    "id",
    "email",
    "company_name",
    "first_name",
    "last_name",
    "phone",
    "metadata",
    "created_by",
    "deleted_at",
    "created_at",
    "updated_at",
];
exports.retrieveTransformQueryConfig = {
    defaultFields: exports.defaultStoreCustomersFields,
    defaultRelations: exports.defaultStoreCustomersRelations,
    allowedRelations: exports.allowedStoreCustomersRelations,
    isList: false,
};
exports.defaultStoreCustomerAddressRelations = [];
exports.allowedStoreCustomerAddressRelations = ["customer"];
exports.defaultStoreCustomerAddressFields = [
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
    defaultFields: exports.defaultStoreCustomerAddressFields,
    defaultRelations: exports.defaultStoreCustomerAddressRelations,
    allowedRelations: exports.allowedStoreCustomerAddressRelations,
    isList: false,
};
exports.listAddressesTransformQueryConfig = __assign(__assign({}, exports.retrieveAddressTransformQueryConfig), { isList: true });
//# sourceMappingURL=query-config.js.map