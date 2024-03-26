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
exports.AdminPostCustomerGroupsGroupCustomersBatchReq = exports.AdminDeleteCustomerGroupsGroupCustomersBatchReq = exports.AdminGetCustomerGroupsGroupCustomersParams = exports.AdminPostCustomerGroupsGroupReq = exports.AdminPostCustomerGroupsReq = exports.AdminGetCustomerGroupsParams = exports.AdminGetCustomerGroupsGroupParams = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var common_1 = require("../../../types/common");
var operator_map_1 = require("../../../types/validators/operator-map");
var utils_1 = require("../../../utils");
var AdminGetCustomerGroupsGroupParams = /** @class */ (function (_super) {
    __extends(AdminGetCustomerGroupsGroupParams, _super);
    function AdminGetCustomerGroupsGroupParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AdminGetCustomerGroupsGroupParams;
}(common_1.FindParams));
exports.AdminGetCustomerGroupsGroupParams = AdminGetCustomerGroupsGroupParams;
var FilterableCustomerPropsValidator = /** @class */ (function () {
    function FilterableCustomerPropsValidator() {
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], FilterableCustomerPropsValidator.prototype, "id", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return operator_map_1.OperatorMapValidator; }),
        __metadata("design:type", Object)
    ], FilterableCustomerPropsValidator.prototype, "email", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], FilterableCustomerPropsValidator.prototype, "default_billing_address_id", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], FilterableCustomerPropsValidator.prototype, "default_shipping_address_id", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], FilterableCustomerPropsValidator.prototype, "company_name", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], FilterableCustomerPropsValidator.prototype, "first_name", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], FilterableCustomerPropsValidator.prototype, "last_name", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], FilterableCustomerPropsValidator.prototype, "created_by", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return operator_map_1.OperatorMapValidator; }),
        __metadata("design:type", Object)
    ], FilterableCustomerPropsValidator.prototype, "created_at", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return operator_map_1.OperatorMapValidator; }),
        __metadata("design:type", Object)
    ], FilterableCustomerPropsValidator.prototype, "updated_at", void 0);
    return FilterableCustomerPropsValidator;
}());
var AdminGetCustomerGroupsParams = /** @class */ (function (_super) {
    __extends(AdminGetCustomerGroupsParams, _super);
    function AdminGetCustomerGroupsParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], AdminGetCustomerGroupsParams.prototype, "id", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return operator_map_1.OperatorMapValidator; }),
        __metadata("design:type", Object)
    ], AdminGetCustomerGroupsParams.prototype, "name", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return FilterableCustomerPropsValidator; }),
        __metadata("design:type", Object)
    ], AdminGetCustomerGroupsParams.prototype, "customers", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], AdminGetCustomerGroupsParams.prototype, "created_by", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return operator_map_1.OperatorMapValidator; }),
        __metadata("design:type", Object)
    ], AdminGetCustomerGroupsParams.prototype, "created_at", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return operator_map_1.OperatorMapValidator; }),
        __metadata("design:type", Object)
    ], AdminGetCustomerGroupsParams.prototype, "updated_at", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return AdminGetCustomerGroupsParams; }),
        __metadata("design:type", Array)
    ], AdminGetCustomerGroupsParams.prototype, "$and", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return AdminGetCustomerGroupsParams; }),
        __metadata("design:type", Array)
    ], AdminGetCustomerGroupsParams.prototype, "$or", void 0);
    return AdminGetCustomerGroupsParams;
}((0, common_1.extendedFindParamsMixin)({
    limit: 100,
    offset: 0,
})));
exports.AdminGetCustomerGroupsParams = AdminGetCustomerGroupsParams;
var AdminPostCustomerGroupsReq = /** @class */ (function () {
    function AdminPostCustomerGroupsReq() {
    }
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminPostCustomerGroupsReq.prototype, "name", void 0);
    return AdminPostCustomerGroupsReq;
}());
exports.AdminPostCustomerGroupsReq = AdminPostCustomerGroupsReq;
var AdminPostCustomerGroupsGroupReq = /** @class */ (function () {
    function AdminPostCustomerGroupsGroupReq() {
    }
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostCustomerGroupsGroupReq.prototype, "name", void 0);
    return AdminPostCustomerGroupsGroupReq;
}());
exports.AdminPostCustomerGroupsGroupReq = AdminPostCustomerGroupsGroupReq;
var AdminGetCustomerGroupsGroupCustomersParams = /** @class */ (function (_super) {
    __extends(AdminGetCustomerGroupsGroupCustomersParams, _super);
    function AdminGetCustomerGroupsGroupCustomersParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], AdminGetCustomerGroupsGroupCustomersParams.prototype, "id", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, utils_1.IsType)([String, [String], operator_map_1.OperatorMapValidator]),
        __metadata("design:type", Object)
    ], AdminGetCustomerGroupsGroupCustomersParams.prototype, "email", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], AdminGetCustomerGroupsGroupCustomersParams.prototype, "company_name", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], AdminGetCustomerGroupsGroupCustomersParams.prototype, "first_name", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, utils_1.IsType)([String, [String], operator_map_1.OperatorMapValidator]),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return (value === "null" ? null : value);
        }),
        __metadata("design:type", Object)
    ], AdminGetCustomerGroupsGroupCustomersParams.prototype, "last_name", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], AdminGetCustomerGroupsGroupCustomersParams.prototype, "created_by", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return operator_map_1.OperatorMapValidator; }),
        __metadata("design:type", Object)
    ], AdminGetCustomerGroupsGroupCustomersParams.prototype, "created_at", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return operator_map_1.OperatorMapValidator; }),
        __metadata("design:type", Object)
    ], AdminGetCustomerGroupsGroupCustomersParams.prototype, "updated_at", void 0);
    return AdminGetCustomerGroupsGroupCustomersParams;
}((0, common_1.extendedFindParamsMixin)({
    limit: 100,
    offset: 0,
})));
exports.AdminGetCustomerGroupsGroupCustomersParams = AdminGetCustomerGroupsGroupCustomersParams;
var CustomerGroupsBatchCustomer = /** @class */ (function () {
    function CustomerGroupsBatchCustomer() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], CustomerGroupsBatchCustomer.prototype, "id", void 0);
    return CustomerGroupsBatchCustomer;
}());
var AdminDeleteCustomerGroupsGroupCustomersBatchReq = /** @class */ (function () {
    function AdminDeleteCustomerGroupsGroupCustomersBatchReq() {
    }
    __decorate([
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return CustomerGroupsBatchCustomer; }),
        __metadata("design:type", Array)
    ], AdminDeleteCustomerGroupsGroupCustomersBatchReq.prototype, "customer_ids", void 0);
    return AdminDeleteCustomerGroupsGroupCustomersBatchReq;
}());
exports.AdminDeleteCustomerGroupsGroupCustomersBatchReq = AdminDeleteCustomerGroupsGroupCustomersBatchReq;
var AdminPostCustomerGroupsGroupCustomersBatchReq = /** @class */ (function () {
    function AdminPostCustomerGroupsGroupCustomersBatchReq() {
    }
    __decorate([
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return CustomerGroupsBatchCustomer; }),
        __metadata("design:type", Array)
    ], AdminPostCustomerGroupsGroupCustomersBatchReq.prototype, "customer_ids", void 0);
    return AdminPostCustomerGroupsGroupCustomersBatchReq;
}());
exports.AdminPostCustomerGroupsGroupCustomersBatchReq = AdminPostCustomerGroupsGroupCustomersBatchReq;
//# sourceMappingURL=validators.js.map