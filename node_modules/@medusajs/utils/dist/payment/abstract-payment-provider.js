"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPaymentProviderError = exports.AbstractPaymentProvider = void 0;
var AbstractPaymentProvider = /** @class */ (function () {
    /**
     * You can use the `constructor` of your Payment Provider to have access to different services in Medusa through [dependency injection](https://docs.medusajs.com/development/fundamentals/dependency-injection).
     *
     * You can also use the constructor to initialize your integration with the third-party provider. For example, if you use a client to connect to the third-party provider’s APIs,
     * you can initialize it in the constructor and use it in other methods in the service.
     *
     * Additionally, if you’re creating your Payment Provider as an external plugin to be installed on any Medusa backend and you want to access the options added for the plugin,
     * you can access it in the constructor. The options are passed as a second parameter.
     *
     * @param {MedusaContainer} container - An instance of `MedusaContainer` that allows you to access other resources, such as services, in your Medusa backend through [dependency injection](https://docs.medusajs.com/development/fundamentals/dependency-injection)
     * @param {Record<string, unknown>} config - If this payment processor is created in a plugin, the plugin's options are passed in this parameter.
     *
     * @example
     * ```ts
     * class MyPaymentService extends AbstractPaymentProvider {
     *   // ...
     *   constructor(container, options) {
     *     super(container)
     *     // you can access options here
     *
     *     // you can also initialize a client that
     *     // communicates with a third-party service.
     *     this.client = new Client(options)
     *   }
     *   // ...
     * }
     * ```
     */
    function AbstractPaymentProvider(container, config // eslint-disable-next-line @typescript-eslint/no-empty-function
    ) {
        if (config === void 0) { config = {}; }
        this.container = container;
        this.config = config;
    }
    /**
     * @ignore
     */
    AbstractPaymentProvider.isPaymentProvider = function (object) {
        var _a;
        return (_a = object === null || object === void 0 ? void 0 : object.constructor) === null || _a === void 0 ? void 0 : _a._isPaymentProvider;
    };
    /**
     * @ignore
     *
     * Return a unique identifier to retrieve the payment plugin provider
     */
    AbstractPaymentProvider.prototype.getIdentifier = function () {
        var ctr = this.constructor;
        if (!ctr.identifier) {
            throw new Error("Missing static property \"identifier\".");
        }
        return ctr.identifier;
    };
    /**
     * @ignore
     */
    AbstractPaymentProvider._isPaymentProvider = true;
    return AbstractPaymentProvider;
}());
exports.AbstractPaymentProvider = AbstractPaymentProvider;
function isPaymentProviderError(obj) {
    return (obj &&
        typeof obj === "object" &&
        "error" in obj &&
        "code" in obj &&
        "detail" in obj);
}
exports.isPaymentProviderError = isPaymentProviderError;
//# sourceMappingURL=abstract-payment-provider.js.map