import { BigNumberRawValue, CartDTO, CartShippingMethodDTO } from "@medusajs/types";
import { BigNumber } from "./big-number";
export * from "./math";
export * from "./promotion";
export * from "./to-big-number-js";
export * from "./transform-properties-to-bignumber";
type GetLineItemTotalsContext = {
    includeTax?: boolean;
    taxRate?: number | null;
};
interface GetShippingMethodTotalInput extends CartShippingMethodDTO {
    raw_amount: BigNumberRawValue;
}
interface GetItemTotalInput {
    id: string;
    unit_price: BigNumber;
    quantity: number;
    is_tax_inclusive?: boolean;
    tax_total?: BigNumber;
    original_tax_total?: BigNumber;
}
interface GetItemTotalOutput {
    quantity: number;
    unit_price: BigNumber;
    subtotal: BigNumber;
    total: BigNumber;
    original_total: BigNumber;
    discount_total: BigNumber;
    tax_total: BigNumber;
    original_tax_total: BigNumber;
}
export declare function getShippingMethodTotals(shippingMethods: GetShippingMethodTotalInput[], context: {
    includeTax?: boolean;
}): {};
export declare function getShippingMethodTotals_(shippingMethod: GetShippingMethodTotalInput, context: {
    includeTax?: boolean;
}): {
    amount: BigNumber;
    total: BigNumber;
    original_total: BigNumber;
    subtotal: BigNumber;
    tax_total: BigNumber;
    original_tax_total: BigNumber;
};
export declare function getLineItemTotals(items: GetItemTotalInput[], context: GetLineItemTotalsContext): {
    [itemId: string]: GetItemTotalOutput;
};
export declare function decorateCartTotals({ shippingMethods, items, }: {
    items: GetItemTotalInput[];
    shippingMethods: GetShippingMethodTotalInput[];
}, totalsConfig?: {
    includeTaxes?: boolean;
}): CartDTO;
