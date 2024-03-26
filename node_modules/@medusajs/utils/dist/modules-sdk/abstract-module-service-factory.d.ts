/**
 * Utility factory and interfaces for module service public facing API
 */
import { Constructor, Context, FindConfig, Pluralize, RestoreReturn, SoftDeleteReturn } from "@medusajs/types";
import { MapToConfig } from "../common";
type ModelsConfigTemplate = {
    [ModelName: string]: {
        singular?: string;
        plural?: string;
        dto: object;
    };
};
type ExtractSingularName<T extends Record<any, any>, K = keyof T> = T[K] extends {
    singular?: string;
} ? T[K]["singular"] : K;
type ExtractPluralName<T extends Record<any, any>, K = keyof T> = T[K] extends {
    plural?: string;
} ? T[K]["plural"] : Pluralize<K & string>;
type ModelConfiguration = Constructor<any> | {
    singular?: string;
    plural?: string;
    model: Constructor<any>;
};
export interface AbstractModuleServiceBase<TContainer, TMainModelDTO> {
    get __container__(): TContainer;
    retrieve(id: string, config?: FindConfig<any>, sharedContext?: Context): Promise<TMainModelDTO>;
    list(filters?: any, config?: FindConfig<any>, sharedContext?: Context): Promise<TMainModelDTO[]>;
    listAndCount(filters?: any, config?: FindConfig<any>, sharedContext?: Context): Promise<[TMainModelDTO[], number]>;
    delete(primaryKeyValues: string | object | string[] | object[], sharedContext?: Context): Promise<void>;
    softDelete<TReturnableLinkableKeys extends string>(primaryKeyValues: string | object | string[] | object[], config?: SoftDeleteReturn<TReturnableLinkableKeys>, sharedContext?: Context): Promise<Record<string, string[]> | void>;
    restore<TReturnableLinkableKeys extends string>(primaryKeyValues: string | object | string[] | object[], config?: RestoreReturn<TReturnableLinkableKeys>, sharedContext?: Context): Promise<Record<string, string[]> | void>;
}
export type AbstractModuleService<TContainer, TMainModelDTO, TOtherModelNamesAndAssociatedDTO extends ModelsConfigTemplate> = AbstractModuleServiceBase<TContainer, TMainModelDTO> & {
    [K in keyof TOtherModelNamesAndAssociatedDTO as `retrieve${ExtractSingularName<TOtherModelNamesAndAssociatedDTO, K> & string}`]: (id: string, config?: FindConfig<any>, sharedContext?: Context) => Promise<TOtherModelNamesAndAssociatedDTO[K & string]["dto"]>;
} & {
    [K in keyof TOtherModelNamesAndAssociatedDTO as `list${ExtractPluralName<TOtherModelNamesAndAssociatedDTO, K> & string}`]: (filters?: any, config?: FindConfig<any>, sharedContext?: Context) => Promise<TOtherModelNamesAndAssociatedDTO[K & string]["dto"][]>;
} & {
    [K in keyof TOtherModelNamesAndAssociatedDTO as `listAndCount${ExtractPluralName<TOtherModelNamesAndAssociatedDTO, K> & string}`]: {
        (filters?: any, config?: FindConfig<any>, sharedContext?: Context): Promise<[
            TOtherModelNamesAndAssociatedDTO[K & string]["dto"][],
            number
        ]>;
    };
} & {
    [K in keyof TOtherModelNamesAndAssociatedDTO as `delete${ExtractPluralName<TOtherModelNamesAndAssociatedDTO, K> & string}`]: {
        (primaryKeyValues: string | object | string[] | object[], sharedContext?: Context): Promise<void>;
    };
} & {
    [K in keyof TOtherModelNamesAndAssociatedDTO as `softDelete${ExtractPluralName<TOtherModelNamesAndAssociatedDTO, K> & string}`]: {
        <TReturnableLinkableKeys extends string>(primaryKeyValues: string | object | string[] | object[], config?: SoftDeleteReturn<TReturnableLinkableKeys>, sharedContext?: Context): Promise<Record<string, string[]> | void>;
    };
} & {
    [K in keyof TOtherModelNamesAndAssociatedDTO as `restore${ExtractPluralName<TOtherModelNamesAndAssociatedDTO, K> & string}`]: {
        <TReturnableLinkableKeys extends string>(primaryKeyValues: string | object | string[] | object[], config?: RestoreReturn<TReturnableLinkableKeys>, sharedContext?: Context): Promise<Record<string, string[]> | void>;
    };
};
/**
 * Factory function for creating an abstract module service
 *
 * @example
 *
 * const otherModels = new Set([
 *   Currency,
 *   MoneyAmount,
 *   PriceList,
 *   PriceListRule,
 *   PriceListRuleValue,
 *   PriceRule,
 *   PriceSetMoneyAmount,
 *   PriceSetMoneyAmountRules,
 *   PriceSetRuleType,
 *   RuleType,
 * ])
 *
 * const AbstractModuleService = ModulesSdkUtils.abstractModuleServiceFactory<
 *   InjectedDependencies,
 *   PricingTypes.PriceSetDTO,
 *   // The configuration of each entity also accept singular/plural properties, if not provided then it is using english pluralization
 *   {
 *     Currency: { dto: PricingTypes.CurrencyDTO }
 *     MoneyAmount: { dto: PricingTypes.MoneyAmountDTO }
 *     PriceSetMoneyAmount: { dto: PricingTypes.PriceSetMoneyAmountDTO }
 *     PriceSetMoneyAmountRules: {
 *       dto: PricingTypes.PriceSetMoneyAmountRulesDTO
 *     }
 *     PriceRule: { dto: PricingTypes.PriceRuleDTO }
 *     RuleType: { dto: PricingTypes.RuleTypeDTO }
 *     PriceList: { dto: PricingTypes.PriceListDTO }
 *     PriceListRule: { dto: PricingTypes.PriceListRuleDTO }
 *   }
 * >(PriceSet, [...otherModels], entityNameToLinkableKeysMap)
 *
 * @param mainModel
 * @param otherModels
 * @param entityNameToLinkableKeysMap
 */
export declare function abstractModuleServiceFactory<TContainer, TMainModelDTO, TOtherModelNamesAndAssociatedDTO extends ModelsConfigTemplate>(mainModel: Constructor<any>, otherModels: ModelConfiguration[], entityNameToLinkableKeysMap?: MapToConfig): {
    new (container: TContainer): AbstractModuleService<TContainer, TMainModelDTO, TOtherModelNamesAndAssociatedDTO>;
};
export {};
