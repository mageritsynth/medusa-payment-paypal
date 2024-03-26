"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    serviceName: "shippingProfileService",
    primaryKeys: ["id"],
    linkableKeys: { profile_id: "ShippingProfile" },
    schema: "\n    scalar Date\n    scalar JSON\n    \n    type ShippingProfile {\n      id: ID!\n      name: String!\n      type: String!\n      created_at: Date!\n      updated_at: Date!  \n      deleted_at: Date\n      metadata: JSON\n    }\n  ",
    alias: [
        {
            name: ["shipping_profile", "shipping_profiles"],
            args: {
                entity: "ShippingProfile",
            },
        },
    ],
};
//# sourceMappingURL=shipping-profile-service.js.map