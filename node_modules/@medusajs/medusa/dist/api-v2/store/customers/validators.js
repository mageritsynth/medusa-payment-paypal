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
exports.StoreGetCustomersMeAddressesParams = exports.StorePostCustomersMeAddressesAddressReq = exports.StorePostCustomersMeAddressesReq = exports.StorePostCustomersReq = exports.StoreGetCustomersMeParams = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var common_1 = require("../../../types/common");
var operator_map_1 = require("../../../types/validators/operator-map");
var StoreGetCustomersMeParams = /** @class */ (function (_super) {
    __extends(StoreGetCustomersMeParams, _super);
    function StoreGetCustomersMeParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StoreGetCustomersMeParams;
}(common_1.FindParams));
exports.StoreGetCustomersMeParams = StoreGetCustomersMeParams;
var StorePostCustomersReq = /** @class */ (function () {
    function StorePostCustomersReq() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StorePostCustomersReq.prototype, "first_name", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StorePostCustomersReq.prototype, "last_name", void 0);
    __decorate([
        (0, class_validator_1.IsEmail)(),
        __metadata("design:type", String)
    ], StorePostCustomersReq.prototype, "email", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StorePostCustomersReq.prototype, "phone", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StorePostCustomersReq.prototype, "company_name", void 0);
    __decorate([
        (0, class_validator_1.IsObject)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], StorePostCustomersReq.prototype, "metadata", void 0);
    return StorePostCustomersReq;
}());
exports.StorePostCustomersReq = StorePostCustomersReq;
var StorePostCustomersMeAddressesReq = /** @class */ (function () {
    function StorePostCustomersMeAddressesReq() {
    }
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StorePostCustomersMeAddressesReq.prototype, "address_name", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Boolean)
    ], StorePostCustomersMeAddressesReq.prototype, "is_default_shipping", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Boolean)
    ], StorePostCustomersMeAddressesReq.prototype, "is_default_billing", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StorePostCustomersMeAddressesReq.prototype, "company", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StorePostCustomersMeAddressesReq.prototype, "first_name", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StorePostCustomersMeAddressesReq.prototype, "last_name", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StorePostCustomersMeAddressesReq.prototype, "address_1", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StorePostCustomersMeAddressesReq.prototype, "address_2", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StorePostCustomersMeAddressesReq.prototype, "city", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StorePostCustomersMeAddressesReq.prototype, "country_code", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StorePostCustomersMeAddressesReq.prototype, "province", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StorePostCustomersMeAddressesReq.prototype, "postal_code", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StorePostCustomersMeAddressesReq.prototype, "phone", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], StorePostCustomersMeAddressesReq.prototype, "metadata", void 0);
    return StorePostCustomersMeAddressesReq;
}());
exports.StorePostCustomersMeAddressesReq = StorePostCustomersMeAddressesReq;
var StorePostCustomersMeAddressesAddressReq = /** @class */ (function () {
    function StorePostCustomersMeAddressesAddressReq() {
    }
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StorePostCustomersMeAddressesAddressReq.prototype, "address_name", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Boolean)
    ], StorePostCustomersMeAddressesAddressReq.prototype, "is_default_shipping", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Boolean)
    ], StorePostCustomersMeAddressesAddressReq.prototype, "is_default_billing", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StorePostCustomersMeAddressesAddressReq.prototype, "company", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StorePostCustomersMeAddressesAddressReq.prototype, "first_name", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StorePostCustomersMeAddressesAddressReq.prototype, "last_name", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StorePostCustomersMeAddressesAddressReq.prototype, "address_1", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StorePostCustomersMeAddressesAddressReq.prototype, "address_2", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StorePostCustomersMeAddressesAddressReq.prototype, "city", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StorePostCustomersMeAddressesAddressReq.prototype, "country_code", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StorePostCustomersMeAddressesAddressReq.prototype, "province", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StorePostCustomersMeAddressesAddressReq.prototype, "postal_code", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StorePostCustomersMeAddressesAddressReq.prototype, "phone", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], StorePostCustomersMeAddressesAddressReq.prototype, "metadata", void 0);
    return StorePostCustomersMeAddressesAddressReq;
}());
exports.StorePostCustomersMeAddressesAddressReq = StorePostCustomersMeAddressesAddressReq;
var StoreGetCustomersMeAddressesParams = /** @class */ (function (_super) {
    __extends(StoreGetCustomersMeAddressesParams, _super);
    function StoreGetCustomersMeAddressesParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], StoreGetCustomersMeAddressesParams.prototype, "address_name", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsBoolean)(),
        __metadata("design:type", Boolean)
    ], StoreGetCustomersMeAddressesParams.prototype, "is_default_shipping", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsBoolean)(),
        __metadata("design:type", Boolean)
    ], StoreGetCustomersMeAddressesParams.prototype, "is_default_billing", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], StoreGetCustomersMeAddressesParams.prototype, "company", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], StoreGetCustomersMeAddressesParams.prototype, "first_name", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], StoreGetCustomersMeAddressesParams.prototype, "last_name", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], StoreGetCustomersMeAddressesParams.prototype, "address_1", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], StoreGetCustomersMeAddressesParams.prototype, "address_2", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], StoreGetCustomersMeAddressesParams.prototype, "city", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], StoreGetCustomersMeAddressesParams.prototype, "country_code", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], StoreGetCustomersMeAddressesParams.prototype, "province", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], StoreGetCustomersMeAddressesParams.prototype, "postal_code", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Object)
    ], StoreGetCustomersMeAddressesParams.prototype, "phone", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return operator_map_1.OperatorMapValidator; }),
        __metadata("design:type", Object)
    ], StoreGetCustomersMeAddressesParams.prototype, "metadata", void 0);
    return StoreGetCustomersMeAddressesParams;
}((0, common_1.extendedFindParamsMixin)({
    limit: 100,
    offset: 0,
})));
exports.StoreGetCustomersMeAddressesParams = StoreGetCustomersMeAddressesParams;
//# sourceMappingURL=validators.js.map