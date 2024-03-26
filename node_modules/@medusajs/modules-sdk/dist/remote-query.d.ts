import { RemoteFetchDataCallback } from "@medusajs/orchestration";
import { JoinerRelationship, LoadedModule, ModuleJoinerConfig, RemoteExpandProperty, RemoteJoinerQuery } from "@medusajs/types";
export declare class RemoteQuery {
    private remoteJoiner;
    private modulesMap;
    private customRemoteFetchData?;
    constructor({ modulesLoaded, customRemoteFetchData, servicesConfig, }: {
        modulesLoaded?: LoadedModule[];
        customRemoteFetchData?: RemoteFetchDataCallback;
        servicesConfig?: ModuleJoinerConfig[];
    });
    setFetchDataCallback(remoteFetchData: (expand: RemoteExpandProperty, keyField: string, ids?: (unknown | unknown[])[], relationship?: any) => Promise<{
        data: unknown[] | {
            [path: string]: unknown[];
        };
        path?: string;
    }>): void;
    static getAllFieldsAndRelations(data: any, prefix?: string, args?: Record<string, unknown[]>): {
        select: string[];
        relations: string[];
        args: Record<string, unknown[]>;
    };
    private hasPagination;
    private buildPagination;
    remoteFetchData(expand: RemoteExpandProperty, keyField: string, ids?: (unknown | unknown[])[], relationship?: JoinerRelationship): Promise<{
        data: unknown[] | {
            [path: string]: unknown;
        };
        path?: string;
    }>;
    query(query: string | RemoteJoinerQuery | object, variables?: Record<string, unknown>): Promise<any>;
}
