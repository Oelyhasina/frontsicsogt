/* tslint:disable */
/* eslint-disable */
/**
 * sicsogt
 * sicsogt API
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { HTTPValidationError } from '../models';
// @ts-ignore
import { Token } from '../models';
/**
 * TokenApi - axios parameter creator
 * @export
 */
export const TokenApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Delete Token
         * @param {number} tokenId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteToken: async (tokenId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'tokenId' is not null or undefined
            assertParamExists('deleteToken', 'tokenId', tokenId)
            const localVarPath = `/api/v2/token/{tokenId}`
                .replace(`{${"tokenId"}}`, encodeURIComponent(String(tokenId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get Token
         * @param {number} tokenId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getToken: async (tokenId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'tokenId' is not null or undefined
            assertParamExists('getToken', 'tokenId', tokenId)
            const localVarPath = `/api/v2/token/{tokenId}`
                .replace(`{${"tokenId"}}`, encodeURIComponent(String(tokenId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get Tokens
         * @param {string} [sort] Format: &#x60;[\&quot;field_name\&quot;, \&quot;direction\&quot;]&#x60;
         * @param {string} [range] Format: &#x60;[start, end]&#x60;
         * @param {any} [filter] Format: &#x60;{cle, valeur}&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTokens: async (sort?: string, range?: string, filter?: any, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/token`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (range !== undefined) {
                localVarQueryParameter['range'] = range;
            }

            if (filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TokenApi - functional programming interface
 * @export
 */
export const TokenApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TokenApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Delete Token
         * @param {number} tokenId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteToken(tokenId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteToken(tokenId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get Token
         * @param {number} tokenId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getToken(tokenId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Token>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getToken(tokenId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get Tokens
         * @param {string} [sort] Format: &#x60;[\&quot;field_name\&quot;, \&quot;direction\&quot;]&#x60;
         * @param {string} [range] Format: &#x60;[start, end]&#x60;
         * @param {any} [filter] Format: &#x60;{cle, valeur}&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTokens(sort?: string, range?: string, filter?: any, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Token>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTokens(sort, range, filter, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TokenApi - factory interface
 * @export
 */
export const TokenApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TokenApiFp(configuration)
    return {
        /**
         * 
         * @summary Delete Token
         * @param {number} tokenId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteToken(tokenId: number, options?: any): AxiosPromise<any> {
            return localVarFp.deleteToken(tokenId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Token
         * @param {number} tokenId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getToken(tokenId: number, options?: any): AxiosPromise<Token> {
            return localVarFp.getToken(tokenId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Tokens
         * @param {string} [sort] Format: &#x60;[\&quot;field_name\&quot;, \&quot;direction\&quot;]&#x60;
         * @param {string} [range] Format: &#x60;[start, end]&#x60;
         * @param {any} [filter] Format: &#x60;{cle, valeur}&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTokens(sort?: string, range?: string, filter?: any, options?: any): AxiosPromise<Array<Token>> {
            return localVarFp.getTokens(sort, range, filter, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for deleteToken operation in TokenApi.
 * @export
 * @interface TokenApiDeleteTokenRequest
 */
export interface TokenApiDeleteTokenRequest {
    /**
     * 
     * @type {number}
     * @memberof TokenApiDeleteToken
     */
    readonly tokenId: number
}

/**
 * Request parameters for getToken operation in TokenApi.
 * @export
 * @interface TokenApiGetTokenRequest
 */
export interface TokenApiGetTokenRequest {
    /**
     * 
     * @type {number}
     * @memberof TokenApiGetToken
     */
    readonly tokenId: number
}

/**
 * Request parameters for getTokens operation in TokenApi.
 * @export
 * @interface TokenApiGetTokensRequest
 */
export interface TokenApiGetTokensRequest {
    /**
     * Format: &#x60;[\&quot;field_name\&quot;, \&quot;direction\&quot;]&#x60;
     * @type {string}
     * @memberof TokenApiGetTokens
     */
    readonly sort?: string

    /**
     * Format: &#x60;[start, end]&#x60;
     * @type {string}
     * @memberof TokenApiGetTokens
     */
    readonly range?: string

    /**
     * Format: &#x60;{cle, valeur}&#x60;
     * @type {any}
     * @memberof TokenApiGetTokens
     */
    readonly filter?: any
}

/**
 * TokenApi - object-oriented interface
 * @export
 * @class TokenApi
 * @extends {BaseAPI}
 */
export class TokenApi extends BaseAPI {
    /**
     * 
     * @summary Delete Token
     * @param {TokenApiDeleteTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApi
     */
    public deleteToken(requestParameters: TokenApiDeleteTokenRequest, options?: any) {
        return TokenApiFp(this.configuration).deleteToken(requestParameters.tokenId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Token
     * @param {TokenApiGetTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApi
     */
    public getToken(requestParameters: TokenApiGetTokenRequest, options?: any) {
        return TokenApiFp(this.configuration).getToken(requestParameters.tokenId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Tokens
     * @param {TokenApiGetTokensRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApi
     */
    public getTokens(requestParameters: TokenApiGetTokensRequest = {}, options?: any) {
        return TokenApiFp(this.configuration).getTokens(requestParameters.sort, requestParameters.range, requestParameters.filter, options).then((request) => request(this.axios, this.basePath));
    }
}
