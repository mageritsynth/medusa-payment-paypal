import { BigNumber as BigNumberJs } from "bignumber.js";
import { BigNumber } from "./big-number";
type InputEntity<T, V extends string> = {
    [key in V]?: InputEntityField;
};
type InputEntityField = number | string | BigNumber;
type Camelize<V extends string> = V extends `${infer A}_${infer B}` ? `${A}${Camelize<Capitalize<B>>}` : V;
type Output<V extends string> = {
    [key in Camelize<V>]: BigNumberJs;
};
export declare function toBigNumberJs<T, V extends string>(entity: InputEntity<T, V>, fields: V[]): Output<V>;
export {};
