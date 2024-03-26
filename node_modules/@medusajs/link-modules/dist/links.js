"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LINKS = void 0;
const modules_sdk_1 = require("@medusajs/modules-sdk");
const utils_1 = require("./utils");
exports.LINKS = {
    ProductVariantInventoryItem: (0, utils_1.composeLinkName)(modules_sdk_1.Modules.PRODUCT, "variant_id", modules_sdk_1.Modules.INVENTORY, "inventory_item_id"),
    ProductVariantPriceSet: (0, utils_1.composeLinkName)(modules_sdk_1.Modules.PRODUCT, "variant_id", modules_sdk_1.Modules.PRICING, "price_set_id"),
    ShippingOptionPriceSet: (0, utils_1.composeLinkName)(modules_sdk_1.Modules.FULFILLMENT, "shipping_option_id", modules_sdk_1.Modules.PRICING, "price_set_id"),
    CartPaymentCollection: (0, utils_1.composeLinkName)(modules_sdk_1.Modules.CART, "cart_id", modules_sdk_1.Modules.PAYMENT, "payment_collection_id"),
    RegionPaymentProvider: (0, utils_1.composeLinkName)(modules_sdk_1.Modules.REGION, "region_id", modules_sdk_1.Modules.PAYMENT, "payment_provider_id"),
    CartPromotion: (0, utils_1.composeLinkName)(modules_sdk_1.Modules.CART, "cart_id", modules_sdk_1.Modules.PROMOTION, "promotion_id"),
    SalesChannelLocation: (0, utils_1.composeLinkName)(modules_sdk_1.Modules.SALES_CHANNEL, "sales_channel_id", modules_sdk_1.Modules.STOCK_LOCATION, "location_id"),
    FulfillmentSetLocation: (0, utils_1.composeLinkName)(modules_sdk_1.Modules.FULFILLMENT, "fulfillment_set_id", modules_sdk_1.Modules.STOCK_LOCATION, "location_id"),
    // Internal services
    ProductShippingProfile: (0, utils_1.composeLinkName)(modules_sdk_1.Modules.PRODUCT, "variant_id", "shippingProfileService", "profile_id"),
    ProductSalesChannel: (0, utils_1.composeLinkName)(modules_sdk_1.Modules.PRODUCT, "product_id", modules_sdk_1.Modules.SALES_CHANNEL, "sales_channel_id"),
    OrderSalesChannel: (0, utils_1.composeLinkName)("orderService", "order_id", modules_sdk_1.Modules.SALES_CHANNEL, "sales_channel_id"),
    PublishableApiKeySalesChannel: (0, utils_1.composeLinkName)(modules_sdk_1.Modules.API_KEY, "api_key_id", modules_sdk_1.Modules.SALES_CHANNEL, "sales_channel_id"),
};
