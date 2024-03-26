import { PriceListRuleDTO, PriceRuleDTO, PriceSetMoneyAmountDTO, ProductVariantDTO, UpdatePriceListPriceDTO } from "@medusajs/types";
export declare function buildPriceListRules(priceListRules: PriceListRuleDTO[]): Record<string, string[]>;
export declare function buildPriceSetRules(priceRules: PriceRuleDTO[]): Record<string, string>;
export declare function buildPriceSetPricesForCore(priceSetMoneyAmounts: (PriceSetMoneyAmountDTO & {
    price_set: PriceSetMoneyAmountDTO["price_set"] & {
        variant?: ProductVariantDTO;
    };
})[]): Record<string, any>[];
export declare function buildPriceSetPricesForModule(priceSetMoneyAmounts: PriceSetMoneyAmountDTO[]): UpdatePriceListPriceDTO[];
