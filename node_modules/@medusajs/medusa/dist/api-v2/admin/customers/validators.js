"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminGetCustomersCustomerAddressesParams = exports.AdminPostCustomersCustomerAddressesAddressReq = exports.AdminPostCustomersCustomerAddressesReq = exports.AdminPostCustomersCustomerReq = exports.AdminPostCustomersReq = exports.AdminGetCustomersParams = exports.AdminGetCustomersCustomerParams = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var common_1 = require("../../../types/common");
var operator_map_1 = require("../../../types/validators/operator-map");
var utils_1 = require("../../../utils");
var AdminGetCustomersCustomerParams = /** @class */ (function (_super) {
    __extends(AdminGetCustomersCustomerParams, _super);
    function AdminGetCustomersCustomerParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AdminGetCustomersCustomerParams;
}(common_1.FindParams));
exports.AdminGetCustomersCustomerParams = AdminGetCustomersCustomerParams;
var AdminGetCustomersParams = /** @class */ (function (_super) {
    __extends(AdminGetCustomersParams, _super);
    function AdminGetCustomersParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], AdminGetCustomersParams.prototype, "id", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, utils_1.IsType)([String, [String], operator_map_1.OperatorMapValidator]),
        __metadata("design:type", Object)
    ], AdminGetCustomersParams.prototype, "email", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return FilterableCustomerGroupPropsValidator; }),
        __metadata("design:type", Object)
    ], AdminGetCustomersParams.prototype, "groups", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], AdminGetCustomersParams.prototype, "company_name", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], AdminGetCustomersParams.prototype, "first_name", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, utils_1.IsType)([String, [String], operator_map_1.OperatorMapValidator]),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return (value === "null" ? null : value);
        }),
        __metadata("design:type", Object)
    ], AdminGetCustomersParams.prototype, "last_name", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], AdminGetCustomersParams.prototype, "created_by", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return operator_map_1.OperatorMapValidator; }),
        __metadata("design:type", Object)
    ], AdminGetCustomersParams.prototype, "created_at", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return operator_map_1.OperatorMapValidator; }),
        __metadata("design:type", Object)
    ], AdminGetCustomersParams.prototype, "updated_at", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return AdminGetCustomersParams; }),
        __metadata("design:type", Array)
    ], AdminGetCustomersParams.prototype, "$and", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return AdminGetCustomersParams; }),
        __metadata("design:type", Array)
    ], AdminGetCustomersParams.prototype, "$or", void 0);
    return AdminGetCustomersParams;
}((0, common_1.extendedFindParamsMixin)({
    limit: 100,
    offset: 0,
})));
exports.AdminGetCustomersParams = AdminGetCustomersParams;
var FilterableCustomerGroupPropsValidator = /** @class */ (function () {
    function FilterableCustomerGroupPropsValidator() {
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], FilterableCustomerGroupPropsValidator.prototype, "id", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return operator_map_1.OperatorMapValidator; }),
        __metadata("design:type", Object)
    ], FilterableCustomerGroupPropsValidator.prototype, "name", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], FilterableCustomerGroupPropsValidator.prototype, "created_by", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return operator_map_1.OperatorMapValidator; }),
        __metadata("design:type", Object)
    ], FilterableCustomerGroupPropsValidator.prototype, "created_at", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return operator_map_1.OperatorMapValidator; }),
        __metadata("design:type", Object)
    ], FilterableCustomerGroupPropsValidator.prototype, "updated_at", void 0);
    return FilterableCustomerGroupPropsValidator;
}());
var AdminPostCustomersReq = /** @class */ (function () {
    function AdminPostCustomersReq() {
    }
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostCustomersReq.prototype, "company_name", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostCustomersReq.prototype, "first_name", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostCustomersReq.prototype, "last_name", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostCustomersReq.prototype, "email", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostCustomersReq.prototype, "phone", void 0);
    return AdminPostCustomersReq;
}());
exports.AdminPostCustomersReq = AdminPostCustomersReq;
var AdminPostCustomersCustomerReq = /** @class */ (function () {
    function AdminPostCustomersCustomerReq() {
    }
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostCustomersCustomerReq.prototype, "company_name", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostCustomersCustomerReq.prototype, "first_name", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostCustomersCustomerReq.prototype, "last_name", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostCustomersCustomerReq.prototype, "email", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostCustomersCustomerReq.prototype, "phone", void 0);
    return AdminPostCustomersCustomerReq;
}());
exports.AdminPostCustomersCustomerReq = AdminPostCustomersCustomerReq;
var AdminPostCustomersCustomerAddressesReq = /** @class */ (function () {
    function AdminPostCustomersCustomerAddressesReq() {
    }
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostCustomersCustomerAddressesReq.prototype, "address_name", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Boolean)
    ], AdminPostCustomersCustomerAddressesReq.prototype, "is_default_shipping", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Boolean)
    ], AdminPostCustomersCustomerAddressesReq.prototype, "is_default_billing", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostCustomersCustomerAddressesReq.prototype, "company", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostCustomersCustomerAddressesReq.prototype, "first_name", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostCustomersCustomerAddressesReq.prototype, "last_name", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostCustomersCustomerAddressesReq.prototype, "address_1", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostCustomersCustomerAddressesReq.prototype, "address_2", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostCustomersCustomerAddressesReq.prototype, "city", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostCustomersCustomerAddressesReq.prototype, "country_code", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostCustomersCustomerAddressesReq.prototype, "province", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostCustomersCustomerAddressesReq.prototype, "postal_code", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostCustomersCustomerAddressesReq.prototype, "phone", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], AdminPostCustomersCustomerAddressesReq.prototype, "metadata", void 0);
    return AdminPostCustomersCustomerAddressesReq;
}());
exports.AdminPostCustomersCustomerAddressesReq = AdminPostCustomersCustomerAddressesReq;
var AdminPostCustomersCustomerAddressesAddressReq = /** @class */ (function () {
    function AdminPostCustomersCustomerAddressesAddressReq() {
    }
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostCustomersCustomerAddressesAddressReq.prototype, "address_name", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Boolean)
    ], AdminPostCustomersCustomerAddressesAddressReq.prototype, "is_default_shipping", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Boolean)
    ], AdminPostCustomersCustomerAddressesAddressReq.prototype, "is_default_billing", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostCustomersCustomerAddressesAddressReq.prototype, "company", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostCustomersCustomerAddressesAddressReq.prototype, "first_name", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostCustomersCustomerAddressesAddressReq.prototype, "last_name", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostCustomersCustomerAddressesAddressReq.prototype, "address_1", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostCustomersCustomerAddressesAddressReq.prototype, "address_2", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostCustomersCustomerAddressesAddressReq.prototype, "city", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostCustomersCustomerAddressesAddressReq.prototype, "country_code", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostCustomersCustomerAddressesAddressReq.prototype, "province", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostCustomersCustomerAddressesAddressReq.prototype, "postal_code", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostCustomersCustomerAddressesAddressReq.prototype, "phone", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], AdminPostCustomersCustomerAddressesAddressReq.prototype, "metadata", void 0);
    return AdminPostCustomersCustomerAddressesAddressReq;
}());
exports.AdminPostCustomersCustomerAddressesAddressReq = AdminPostCustomersCustomerAddressesAddressReq;
var AdminGetCustomersCustomerAddressesParams = /** @class */ (function (_super) {
    __extends(AdminGetCustomersCustomerAddressesParams, _super);
    function AdminGetCustomersCustomerAddressesParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], AdminGetCustomersCustomerAddressesParams.prototype, "address_name", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsBoolean)(),
        __metadata("design:type", Boolean)
    ], AdminGetCustomersCustomerAddressesParams.prototype, "is_default_shipping", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsBoolean)(),
        __metadata("design:type", Boolean)
    ], AdminGetCustomersCustomerAddressesParams.prototype, "is_default_billing", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], AdminGetCustomersCustomerAddressesParams.prototype, "company", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], AdminGetCustomersCustomerAddressesParams.prototype, "first_name", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], AdminGetCustomersCustomerAddressesParams.prototype, "last_name", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], AdminGetCustomersCustomerAddressesParams.prototype, "address_1", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], AdminGetCustomersCustomerAddressesParams.prototype, "address_2", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], AdminGetCustomersCustomerAddressesParams.prototype, "city", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], AdminGetCustomersCustomerAddressesParams.prototype, "country_code", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], AdminGetCustomersCustomerAddressesParams.prototype, "province", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], AdminGetCustomersCustomerAddressesParams.prototype, "postal_code", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], AdminGetCustomersCustomerAddressesParams.prototype, "phone", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return operator_map_1.OperatorMapValidator; }),
        __metadata("design:type", Object)
    ], AdminGetCustomersCustomerAddressesParams.prototype, "metadata", void 0);
    return AdminGetCustomersCustomerAddressesParams;
}((0, common_1.extendedFindParamsMixin)({
    limit: 100,
    offset: 0,
})));
exports.AdminGetCustomersCustomerAddressesParams = AdminGetCustomersCustomerAddressesParams;
//# sourceMappingURL=validators.js.map