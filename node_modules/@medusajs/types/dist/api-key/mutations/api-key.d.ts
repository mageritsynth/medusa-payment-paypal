import { ApiKeyType } from "../common";
export interface CreateApiKeyDTO {
    title: string;
    type: ApiKeyType;
    created_by: string;
}
export interface UpsertApiKeyDTO {
    id?: string;
    title?: string;
    type?: ApiKeyType;
    created_by?: string;
}
export interface UpdateApiKeyDTO {
    title?: string;
}
export interface RevokeApiKeyDTO {
    revoked_by: string;
    revoke_in?: number;
}
//# sourceMappingURL=api-key.d.ts.map