import { MedusaContainer } from "@medusajs/types";
import { PriceList } from "../../../../../models";
export declare function getPriceListPricingModule(id: string, { container, }: {
    container: MedusaContainer;
}): Promise<PriceList>;
