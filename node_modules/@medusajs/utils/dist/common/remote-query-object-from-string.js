"use strict";
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
exports.remoteQueryObjectFromString = void 0;
/**
 * Convert a string fields array to a remote query object
 * @param entryPoint
 * @param variables
 * @param fields
 *
 * @example
 * const fields = [
 *   "id",
 *   "created_at",
 *   "updated_at",
 *   "deleted_at",
 *   "url",
 *   "metadata",
 *   "tags.id",
 *   "tags.created_at",
 *   "tags.updated_at",
 *   "tags.deleted_at",
 *   "tags.value",
 *   "options.id",
 *   "options.created_at",
 *   "options.updated_at",
 *   "options.deleted_at",
 *   "options.title",
 *   "options.product_id",
 *   "options.metadata",
 *   "options.values.id",
 *   "options.values.created_at",
 *   "options.values.updated_at",
 *   "options.values.deleted_at",
 *   "options.values.value",
 *   "options.values.option_id",
 *   "options.values.variant_id",
 *   "options.values.metadata",
 * ]
 *
 * const remoteQueryObject = remoteQueryObjectFromString({
 *   entryPoint: "product",
 *   variables: {},
 *   fields,
 * })
 *
 * console.log(remoteQueryObject)
 * // {
 * //   product: {
 * //     __args: {},
 * //     fields: [
 * //       "id",
 * //       "created_at",
 * //       "updated_at",
 * //       "deleted_at",
 * //       "url",
 * //       "metadata",
 * //     ],
 * //
 * //     tags: {
 * //       fields: ["id", "created_at", "updated_at", "deleted_at", "value"],
 * //     },
 * //
 * //     options: {
 * //       fields: [
 * //         "id",
 * //         "created_at",
 * //         "updated_at",
 * //         "deleted_at",
 * //         "title",
 * //         "product_id",
 * //         "metadata",
 * //       ],
 * //       values: {
 * //         fields: [
 * //           "id",
 * //           "created_at",
 * //           "updated_at",
 * //           "deleted_at",
 * //           "value",
 * //           "option_id",
 * //           "variant_id",
 * //           "metadata",
 * //         ],
 * //       },
 * //     },
 * //   },
 * // }
 */
function remoteQueryObjectFromString(_a) {
    var _b, e_1, _c;
    var _d;
    var entryPoint = _a.entryPoint, variables = _a.variables, fields = _a.fields;
    var remoteJoinerConfig = (_b = {},
        _b[entryPoint] = {
            fields: [],
        },
        _b);
    if (variables) {
        remoteJoinerConfig[entryPoint]["__args"] = variables;
    }
    try {
        for (var fields_1 = __values(fields), fields_1_1 = fields_1.next(); !fields_1_1.done; fields_1_1 = fields_1.next()) {
            var field = fields_1_1.value;
            if (!field.includes(".")) {
                remoteJoinerConfig[entryPoint]["fields"].push(field);
                continue;
            }
            var fieldSegments = field.split(".");
            var fieldProperty = fieldSegments.pop();
            var deepConfigRef = fieldSegments.reduce(function (acc, curr) {
                var _a;
                (_a = acc[curr]) !== null && _a !== void 0 ? _a : (acc[curr] = {});
                return acc[curr];
            }, remoteJoinerConfig[entryPoint]);
            (_d = deepConfigRef["fields"]) !== null && _d !== void 0 ? _d : (deepConfigRef["fields"] = []);
            deepConfigRef["fields"].push(fieldProperty);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (fields_1_1 && !fields_1_1.done && (_c = fields_1.return)) _c.call(fields_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return remoteJoinerConfig;
}
exports.remoteQueryObjectFromString = remoteQueryObjectFromString;
//# sourceMappingURL=remote-query-object-from-string.js.map