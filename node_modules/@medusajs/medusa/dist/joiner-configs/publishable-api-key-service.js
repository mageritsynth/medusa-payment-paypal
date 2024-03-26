"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    serviceName: "publishableApiKeyService",
    primaryKeys: ["id"],
    linkableKeys: { publishable_key_id: "PublishableApiKey" },
    schema: "\n      scalar Date\n      scalar JSON\n      \n      type PublishableApiKey {\n        id: ID!\n        sales_channel_id: String!\n        publishable_key_id: String!\n        created_at: Date!\n        updated_at: Date!  \n        deleted_at: Date\n      }\n    ",
    alias: [
        {
            name: ["publishable_api_key", "publishable_api_keys"],
            args: {
                entity: "PublishableApiKey",
            },
        },
    ],
};
//# sourceMappingURL=publishable-api-key-service.js.map