export interface CreateShippingOptionTypeDTO {
    label: string;
    description: string;
    code: string;
    shipping_option_id: string;
}
export interface UpdateShippingOptionTypeDTO extends Partial<CreateShippingOptionTypeDTO> {
    id: string;
}
//# sourceMappingURL=shipping-option-type.d.ts.map