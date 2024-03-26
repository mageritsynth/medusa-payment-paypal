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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mikroOrmBaseRepositoryFactory = exports.MikroOrmBaseTreeRepository = exports.MikroOrmBaseRepository = exports.MikroOrmBase = void 0;
var core_1 = require("@mikro-orm/core");
var common_1 = require("../../common");
var modules_sdk_1 = require("../../modules-sdk");
var utils_1 = require("../utils");
var utils_2 = require("./utils");
var MikroOrmBase = /** @class */ (function () {
    function MikroOrmBase(_a) {
        var manager = _a.manager;
        this.manager_ = manager;
    }
    MikroOrmBase.prototype.getFreshManager = function () {
        return (this.manager_.fork
            ? this.manager_.fork()
            : this.manager_);
    };
    MikroOrmBase.prototype.getActiveManager = function (_a) {
        var _b;
        var _c = _a === void 0 ? {} : _a, transactionManager = _c.transactionManager, manager = _c.manager;
        return ((_b = transactionManager !== null && transactionManager !== void 0 ? transactionManager : manager) !== null && _b !== void 0 ? _b : this.manager_);
    };
    MikroOrmBase.prototype.transaction = function (task, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, utils_1.transactionWrapper.bind(this)(task, options)];
                    case 1: 
                    // @ts-ignore
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MikroOrmBase.prototype.serialize = function (data, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, utils_2.mikroOrmSerializer)(data, options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return MikroOrmBase;
}());
exports.MikroOrmBase = MikroOrmBase;
/**
 * Privileged extends of the abstract classes unless most of the methods can't be implemented
 * in your repository. This base repository is also used to provide a base repository
 * injection if needed to be able to use the common methods without being related to an entity.
 * In this case, none of the method will be implemented except the manager and transaction
 * related ones.
 */
var MikroOrmBaseRepository = /** @class */ (function (_super) {
    __extends(MikroOrmBaseRepository, _super);
    function MikroOrmBaseRepository() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
    }
    MikroOrmBaseRepository.prototype.create = function (data, context) {
        throw new Error("Method not implemented.");
    };
    MikroOrmBaseRepository.prototype.update = function (data, context) {
        throw new Error("Method not implemented.");
    };
    MikroOrmBaseRepository.prototype.delete = function (idsOrPKs, context) {
        throw new Error("Method not implemented.");
    };
    MikroOrmBaseRepository.prototype.find = function (options, context) {
        throw new Error("Method not implemented.");
    };
    MikroOrmBaseRepository.prototype.findAndCount = function (options, context) {
        throw new Error("Method not implemented.");
    };
    MikroOrmBaseRepository.prototype.upsert = function (data, context) {
        if (context === void 0) { context = {}; }
        throw new Error("Method not implemented.");
    };
    MikroOrmBaseRepository.prototype.softDelete = function (idsOrFilter, sharedContext) {
        if (sharedContext === void 0) { sharedContext = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var isArray, filter, entities, date, manager, softDeletedEntitiesMap;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isArray = Array.isArray(idsOrFilter);
                        filter = isArray || (0, common_1.isString)(idsOrFilter)
                            ? {
                                id: {
                                    $in: isArray ? idsOrFilter : [idsOrFilter],
                                },
                            }
                            : idsOrFilter;
                        return [4 /*yield*/, this.find({ where: filter }, sharedContext)];
                    case 1:
                        entities = _a.sent();
                        date = new Date();
                        manager = this.getActiveManager(sharedContext);
                        return [4 /*yield*/, (0, utils_2.mikroOrmUpdateDeletedAtRecursively)(manager, entities, date)];
                    case 2:
                        _a.sent();
                        softDeletedEntitiesMap = (0, utils_1.getSoftDeletedCascadedEntitiesIdsMappedBy)({
                            entities: entities,
                        });
                        return [2 /*return*/, [entities, softDeletedEntitiesMap]];
                }
            });
        });
    };
    MikroOrmBaseRepository.prototype.restore = function (idsOrFilter, sharedContext) {
        if (sharedContext === void 0) { sharedContext = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var isArray, filter, query, entities, manager, softDeletedEntitiesMap;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isArray = Array.isArray(idsOrFilter);
                        filter = isArray || (0, common_1.isString)(idsOrFilter)
                            ? {
                                id: {
                                    $in: isArray ? idsOrFilter : [idsOrFilter],
                                },
                            }
                            : idsOrFilter;
                        query = (0, modules_sdk_1.buildQuery)(filter, {
                            withDeleted: true,
                        });
                        return [4 /*yield*/, this.find(query, sharedContext)];
                    case 1:
                        entities = _a.sent();
                        manager = this.getActiveManager(sharedContext);
                        return [4 /*yield*/, (0, utils_2.mikroOrmUpdateDeletedAtRecursively)(manager, entities, null)];
                    case 2:
                        _a.sent();
                        softDeletedEntitiesMap = (0, utils_1.getSoftDeletedCascadedEntitiesIdsMappedBy)({
                            entities: entities,
                            restored: true,
                        });
                        return [2 /*return*/, [entities, softDeletedEntitiesMap]];
                }
            });
        });
    };
    MikroOrmBaseRepository.prototype.applyFreeTextSearchFilters = function (findOptions, retrieveConstraintsToApply) {
        if (!("q" in findOptions.where) || !findOptions.where.q) {
            delete findOptions.where.q;
            return;
        }
        var q = findOptions.where.q;
        delete findOptions.where.q;
        findOptions.where = {
            $and: [findOptions.where, { $or: retrieveConstraintsToApply(q) }],
        };
    };
    return MikroOrmBaseRepository;
}(MikroOrmBase));
exports.MikroOrmBaseRepository = MikroOrmBaseRepository;
var MikroOrmBaseTreeRepository = /** @class */ (function (_super) {
    __extends(MikroOrmBaseTreeRepository, _super);
    function MikroOrmBaseTreeRepository() {
        return _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
    }
    MikroOrmBaseTreeRepository.prototype.find = function (options, transformOptions, context) {
        throw new Error("Method not implemented.");
    };
    MikroOrmBaseTreeRepository.prototype.findAndCount = function (options, transformOptions, context) {
        throw new Error("Method not implemented.");
    };
    MikroOrmBaseTreeRepository.prototype.create = function (data, context) {
        throw new Error("Method not implemented.");
    };
    MikroOrmBaseTreeRepository.prototype.delete = function (id, context) {
        throw new Error("Method not implemented.");
    };
    return MikroOrmBaseTreeRepository;
}(MikroOrmBase));
exports.MikroOrmBaseTreeRepository = MikroOrmBaseTreeRepository;
function mikroOrmBaseRepositoryFactory(entity) {
    var MikroOrmAbstractBaseRepository_ = /** @class */ (function (_super) {
        __extends(MikroOrmAbstractBaseRepository_, _super);
        // @ts-ignore
        function MikroOrmAbstractBaseRepository_() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        }
        MikroOrmAbstractBaseRepository_.buildUniqueCompositeKeyValue = function (keys, data) {
            return keys.map(function (k) { return data[k]; }).join("_");
        };
        MikroOrmAbstractBaseRepository_.retrievePrimaryKeys = function (entity) {
            var _a, _b, _c;
            return ((_c = (_b = (_a = entity.meta) === null || _a === void 0 ? void 0 : _a.primaryKeys) !== null && _b !== void 0 ? _b : entity.prototype.__meta.primaryKeys) !== null && _c !== void 0 ? _c : ["id"]);
        };
        MikroOrmAbstractBaseRepository_.prototype.create = function (data, context) {
            return __awaiter(this, void 0, void 0, function () {
                var manager, entities;
                return __generator(this, function (_a) {
                    manager = this.getActiveManager(context);
                    entities = data.map(function (data_) {
                        return manager.create(entity, data_);
                    });
                    manager.persist(entities);
                    return [2 /*return*/, entities];
                });
            });
        };
        MikroOrmAbstractBaseRepository_.prototype.update = function (data, context) {
            return __awaiter(this, void 0, void 0, function () {
                var manager, entities;
                return __generator(this, function (_a) {
                    manager = this.getActiveManager(context);
                    entities = data.map(function (data_) {
                        return manager.assign(data_.entity, data_.update);
                    });
                    manager.persist(entities);
                    return [2 /*return*/, entities];
                });
            });
        };
        MikroOrmAbstractBaseRepository_.prototype.delete = function (filters, context) {
            return __awaiter(this, void 0, void 0, function () {
                var manager;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            manager = this.getActiveManager(context);
                            return [4 /*yield*/, manager.nativeDelete(entity, filters)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        MikroOrmAbstractBaseRepository_.prototype.find = function (options, context) {
            var _a;
            return __awaiter(this, void 0, void 0, function () {
                var manager, findOptions_;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            manager = this.getActiveManager(context);
                            findOptions_ = __assign({}, options);
                            (_a = findOptions_.options) !== null && _a !== void 0 ? _a : (findOptions_.options = {});
                            if (!("strategy" in findOptions_.options)) {
                                if (findOptions_.options.limit != null || findOptions_.options.offset) {
                                    Object.assign(findOptions_.options, {
                                        strategy: core_1.LoadStrategy.SELECT_IN,
                                    });
                                }
                                else {
                                    Object.assign(findOptions_.options, {
                                        strategy: core_1.LoadStrategy.JOINED,
                                    });
                                }
                            }
                            return [4 /*yield*/, manager.find(entity, findOptions_.where, findOptions_.options)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        };
        MikroOrmAbstractBaseRepository_.prototype.findAndCount = function (findOptions, context) {
            var _a;
            if (findOptions === void 0) { findOptions = { where: {} }; }
            if (context === void 0) { context = {}; }
            return __awaiter(this, void 0, void 0, function () {
                var manager, findOptions_;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            manager = this.getActiveManager(context);
                            findOptions_ = __assign({}, findOptions);
                            (_a = findOptions_.options) !== null && _a !== void 0 ? _a : (findOptions_.options = {});
                            Object.assign(findOptions_.options, {
                                strategy: core_1.LoadStrategy.SELECT_IN,
                            });
                            return [4 /*yield*/, manager.findAndCount(entity, findOptions_.where, findOptions_.options)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        };
        MikroOrmAbstractBaseRepository_.prototype.upsert = function (data, context) {
            if (context === void 0) { context = {}; }
            return __awaiter(this, void 0, void 0, function () {
                var manager, primaryKeys, primaryKeysCriteria, primaryKeyValues, allEntities, existingEntities, existingEntitiesMap, upsertedEntities, createdEntities, updatedEntities;
                var _a;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            manager = this.getActiveManager(context);
                            primaryKeys = MikroOrmAbstractBaseRepository_.retrievePrimaryKeys(entity);
                            primaryKeysCriteria = [];
                            if (primaryKeys.length === 1) {
                                primaryKeyValues = data
                                    .map(function (d) { return d[primaryKeys[0]]; })
                                    .filter(Boolean);
                                if (primaryKeyValues.length) {
                                    primaryKeysCriteria.push((_a = {},
                                        _a[primaryKeys[0]] = primaryKeyValues,
                                        _a));
                                }
                            }
                            else {
                                primaryKeysCriteria = data.map(function (d) { return ({
                                    $and: primaryKeys.map(function (key) {
                                        var _a;
                                        return (_a = {}, _a[key] = d[key], _a);
                                    }),
                                }); });
                            }
                            allEntities = [];
                            if (!primaryKeysCriteria.length) return [3 /*break*/, 2];
                            return [4 /*yield*/, Promise.all(primaryKeysCriteria.map(function (criteria) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, this.find({ where: criteria }, context)];
                                            case 1: return [2 /*return*/, _a.sent()];
                                        }
                                    });
                                }); }))];
                        case 1:
                            allEntities = _b.sent();
                            _b.label = 2;
                        case 2:
                            existingEntities = allEntities.flat();
                            existingEntitiesMap = new Map();
                            existingEntities.forEach(function (entity) {
                                if (entity) {
                                    var key = MikroOrmAbstractBaseRepository_.buildUniqueCompositeKeyValue(primaryKeys, entity);
                                    existingEntitiesMap.set(key, entity);
                                }
                            });
                            upsertedEntities = [];
                            createdEntities = [];
                            updatedEntities = [];
                            data.forEach(function (data_) {
                                // In case the data provided are just strings, then we build an object with the primary key as the key and the data as the valuecd -
                                var key = MikroOrmAbstractBaseRepository_.buildUniqueCompositeKeyValue(primaryKeys, data_);
                                var existingEntity = existingEntitiesMap.get(key);
                                if (existingEntity) {
                                    var updatedType = manager.assign(existingEntity, data_);
                                    updatedEntities.push(updatedType);
                                }
                                else {
                                    var newEntity = manager.create(entity, data_);
                                    createdEntities.push(newEntity);
                                }
                            });
                            if (createdEntities.length) {
                                manager.persist(createdEntities);
                                upsertedEntities.push.apply(upsertedEntities, __spreadArray([], __read(createdEntities), false));
                            }
                            if (updatedEntities.length) {
                                manager.persist(updatedEntities);
                                upsertedEntities.push.apply(upsertedEntities, __spreadArray([], __read(updatedEntities), false));
                            }
                            // TODO return the all, created, updated entities
                            return [2 /*return*/, upsertedEntities];
                    }
                });
            });
        };
        return MikroOrmAbstractBaseRepository_;
    }(MikroOrmBaseRepository));
    return MikroOrmAbstractBaseRepository_;
}
exports.mikroOrmBaseRepositoryFactory = mikroOrmBaseRepositoryFactory;
//# sourceMappingURL=mikro-orm-repository.js.map