"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureFlagEntity = exports.FeatureFlagClassDecorators = exports.FeatureFlagDecorators = exports.FeatureFlagColumn = void 0;
var typeorm_1 = require("typeorm");
var feature_flags_1 = require("../loaders/feature-flags");
/**
 * If that file is required in a non node environment then the setImmediate timer does not exists.
 * This can happen when a client package require a server based package and that one of the import
 * require to import that file which is using the setImmediate.
 * In order to take care of those cases, the setImmediate timer will use the one provided by the api (node)
 * if possible and will provide a mock in a browser like environment.
 */
var setImmediate_;
try {
    setImmediate_ = setImmediate;
}
catch (e) {
    console.warn("[feature-flag-decorator.ts] setImmediate will use a mock, this happen when this file is required in a browser environment and should not impact you");
    setImmediate_ = function (callback) { return callback(); };
}
function FeatureFlagColumn(featureFlag, columnOptions) {
    if (columnOptions === void 0) { columnOptions = {}; }
    return function (target, propertyName) {
        setImmediate_(function () {
            if (!feature_flags_1.featureFlagRouter.isFeatureEnabled(featureFlag)) {
                return;
            }
            (0, typeorm_1.Column)(columnOptions)(target, propertyName);
        });
    };
}
exports.FeatureFlagColumn = FeatureFlagColumn;
function FeatureFlagDecorators(featureFlag, decorators) {
    return function (target, propertyName) {
        setImmediate_(function () {
            if (!feature_flags_1.featureFlagRouter.isFeatureEnabled(featureFlag)) {
                return;
            }
            decorators.forEach(function (decorator) {
                decorator(target, propertyName);
            });
        });
    };
}
exports.FeatureFlagDecorators = FeatureFlagDecorators;
function FeatureFlagClassDecorators(featureFlag, decorators) {
    return function (target) {
        setImmediate_(function () {
            if (!feature_flags_1.featureFlagRouter.isFeatureEnabled(featureFlag)) {
                return;
            }
            decorators.forEach(function (decorator) {
                decorator(target);
            });
        });
    };
}
exports.FeatureFlagClassDecorators = FeatureFlagClassDecorators;
function FeatureFlagEntity(featureFlag, name, options) {
    return function (target) {
        target["isFeatureEnabled"] = function () {
            return feature_flags_1.featureFlagRouter.isFeatureEnabled(featureFlag);
        };
        (0, typeorm_1.Entity)(name, options)(target);
    };
}
exports.FeatureFlagEntity = FeatureFlagEntity;
//# sourceMappingURL=feature-flag-decorators.js.map