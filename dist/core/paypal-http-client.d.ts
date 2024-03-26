import { Logger } from "@medusajs/medusa";
import { AxiosInstance, AxiosRequestConfig, Method } from "axios";
import { PaypalSdkOptions } from "./types";
export declare class PaypalHttpClient {
    protected readonly baseUrl_: string;
    protected readonly httpClient_: AxiosInstance;
    protected readonly options_: PaypalSdkOptions;
    protected readonly logger_?: Logger;
    protected accessToken_: string;
    constructor(options: PaypalSdkOptions);
    /**
     * Run a request and return the result
     * @param url
     * @param data
     * @param method
     * @protected
     */
    request<T, TResponse>({ url, data, method, }: {
        url: string;
        data?: T;
        method?: Method;
    }): Promise<TResponse>;
    /**
     * Will run the original method and retry it if an unauthorized error is returned
     * @param originalMethod
     * @protected
     */
    protected retryIfNecessary<T = unknown>(originalMethod: Function): (config: any, originalConfig: any, retryCount?: number) => Promise<any>;
    /**
     * Authenticate and store the access token
     * @protected
     */
    protected authenticate(originalConfig?: AxiosRequestConfig, retryCount?: number): Promise<void>;
}
