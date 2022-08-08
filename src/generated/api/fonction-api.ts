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
import { Fonction } from '../models';
// @ts-ignore
import { FonctionCreate } from '../models';
// @ts-ignore
import { FonctionUpdate } from '../models';
// @ts-ignore
import { HTTPValidationError } from '../models';
/**
 * FonctionApi - axios parameter creator
 * @export
 */
export const FonctionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create Fonction
         * @param {FonctionCreate} fonctionCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createFonction: async (fonctionCreate: FonctionCreate, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'fonctionCreate' is not null or undefined
            assertParamExists('createFonction', 'fonctionCreate', fonctionCreate)
            const localVarPath = `/api/v2/fonction`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(fonctionCreate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete Fonction
         * @param {number} fonctionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteFonction: async (fonctionId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'fonctionId' is not null or undefined
            assertParamExists('deleteFonction', 'fonctionId', fonctionId)
            const localVarPath = `/api/v2/fonction/{fonctionId}`
                .replace(`{${"fonctionId"}}`, encodeURIComponent(String(fonctionId)));
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
         * @summary Get Fonction
         * @param {number} fonctionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFonction: async (fonctionId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'fonctionId' is not null or undefined
            assertParamExists('getFonction', 'fonctionId', fonctionId)
            const localVarPath = `/api/v2/fonction/{fonctionId}`
                .replace(`{${"fonctionId"}}`, encodeURIComponent(String(fonctionId)));
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
         * @summary Get Fonctions
         * @param {string} [sort] Format: &#x60;[\&quot;field_name\&quot;, \&quot;direction\&quot;]&#x60;
         * @param {string} [range] Format: &#x60;[start, end]&#x60;
         * @param {any} [filter] Format: &#x60;{cle, valeur}&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFonctions: async (sort?: string, range?: string, filter?: any, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/fonction`;
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
        /**
         * 
         * @summary Update Fonction
         * @param {number} fonctionId 
         * @param {FonctionUpdate} fonctionUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateFonction: async (fonctionId: number, fonctionUpdate: FonctionUpdate, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'fonctionId' is not null or undefined
            assertParamExists('updateFonction', 'fonctionId', fonctionId)
            // verify required parameter 'fonctionUpdate' is not null or undefined
            assertParamExists('updateFonction', 'fonctionUpdate', fonctionUpdate)
            const localVarPath = `/api/v2/fonction/{fonctionId}`
                .replace(`{${"fonctionId"}}`, encodeURIComponent(String(fonctionId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(fonctionUpdate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FonctionApi - functional programming interface
 * @export
 */
export const FonctionApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FonctionApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create Fonction
         * @param {FonctionCreate} fonctionCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createFonction(fonctionCreate: FonctionCreate, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Fonction>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createFonction(fonctionCreate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete Fonction
         * @param {number} fonctionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteFonction(fonctionId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteFonction(fonctionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get Fonction
         * @param {number} fonctionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFonction(fonctionId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Fonction>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFonction(fonctionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get Fonctions
         * @param {string} [sort] Format: &#x60;[\&quot;field_name\&quot;, \&quot;direction\&quot;]&#x60;
         * @param {string} [range] Format: &#x60;[start, end]&#x60;
         * @param {any} [filter] Format: &#x60;{cle, valeur}&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFonctions(sort?: string, range?: string, filter?: any, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Fonction>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFonctions(sort, range, filter, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update Fonction
         * @param {number} fonctionId 
         * @param {FonctionUpdate} fonctionUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateFonction(fonctionId: number, fonctionUpdate: FonctionUpdate, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Fonction>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateFonction(fonctionId, fonctionUpdate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FonctionApi - factory interface
 * @export
 */
export const FonctionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FonctionApiFp(configuration)
    return {
        /**
         * 
         * @summary Create Fonction
         * @param {FonctionCreate} fonctionCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createFonction(fonctionCreate: FonctionCreate, options?: any): AxiosPromise<Fonction> {
            return localVarFp.createFonction(fonctionCreate, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete Fonction
         * @param {number} fonctionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteFonction(fonctionId: number, options?: any): AxiosPromise<any> {
            return localVarFp.deleteFonction(fonctionId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Fonction
         * @param {number} fonctionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFonction(fonctionId: number, options?: any): AxiosPromise<Fonction> {
            return localVarFp.getFonction(fonctionId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Fonctions
         * @param {string} [sort] Format: &#x60;[\&quot;field_name\&quot;, \&quot;direction\&quot;]&#x60;
         * @param {string} [range] Format: &#x60;[start, end]&#x60;
         * @param {any} [filter] Format: &#x60;{cle, valeur}&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFonctions(sort?: string, range?: string, filter?: any, options?: any): AxiosPromise<Array<Fonction>> {
            return localVarFp.getFonctions(sort, range, filter, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update Fonction
         * @param {number} fonctionId 
         * @param {FonctionUpdate} fonctionUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateFonction(fonctionId: number, fonctionUpdate: FonctionUpdate, options?: any): AxiosPromise<Fonction> {
            return localVarFp.updateFonction(fonctionId, fonctionUpdate, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createFonction operation in FonctionApi.
 * @export
 * @interface FonctionApiCreateFonctionRequest
 */
export interface FonctionApiCreateFonctionRequest {
    /**
     * 
     * @type {FonctionCreate}
     * @memberof FonctionApiCreateFonction
     */
    readonly fonctionCreate: FonctionCreate
}

/**
 * Request parameters for deleteFonction operation in FonctionApi.
 * @export
 * @interface FonctionApiDeleteFonctionRequest
 */
export interface FonctionApiDeleteFonctionRequest {
    /**
     * 
     * @type {number}
     * @memberof FonctionApiDeleteFonction
     */
    readonly fonctionId: number
}

/**
 * Request parameters for getFonction operation in FonctionApi.
 * @export
 * @interface FonctionApiGetFonctionRequest
 */
export interface FonctionApiGetFonctionRequest {
    /**
     * 
     * @type {number}
     * @memberof FonctionApiGetFonction
     */
    readonly fonctionId: number
}

/**
 * Request parameters for getFonctions operation in FonctionApi.
 * @export
 * @interface FonctionApiGetFonctionsRequest
 */
export interface FonctionApiGetFonctionsRequest {
    /**
     * Format: &#x60;[\&quot;field_name\&quot;, \&quot;direction\&quot;]&#x60;
     * @type {string}
     * @memberof FonctionApiGetFonctions
     */
    readonly sort?: string

    /**
     * Format: &#x60;[start, end]&#x60;
     * @type {string}
     * @memberof FonctionApiGetFonctions
     */
    readonly range?: string

    /**
     * Format: &#x60;{cle, valeur}&#x60;
     * @type {any}
     * @memberof FonctionApiGetFonctions
     */
    readonly filter?: any
}

/**
 * Request parameters for updateFonction operation in FonctionApi.
 * @export
 * @interface FonctionApiUpdateFonctionRequest
 */
export interface FonctionApiUpdateFonctionRequest {
    /**
     * 
     * @type {number}
     * @memberof FonctionApiUpdateFonction
     */
    readonly fonctionId: number

    /**
     * 
     * @type {FonctionUpdate}
     * @memberof FonctionApiUpdateFonction
     */
    readonly fonctionUpdate: FonctionUpdate
}

/**
 * FonctionApi - object-oriented interface
 * @export
 * @class FonctionApi
 * @extends {BaseAPI}
 */
export class FonctionApi extends BaseAPI {
    /**
     * 
     * @summary Create Fonction
     * @param {FonctionApiCreateFonctionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FonctionApi
     */
    public createFonction(requestParameters: FonctionApiCreateFonctionRequest, options?: any) {
        return FonctionApiFp(this.configuration).createFonction(requestParameters.fonctionCreate, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete Fonction
     * @param {FonctionApiDeleteFonctionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FonctionApi
     */
    public deleteFonction(requestParameters: FonctionApiDeleteFonctionRequest, options?: any) {
        return FonctionApiFp(this.configuration).deleteFonction(requestParameters.fonctionId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Fonction
     * @param {FonctionApiGetFonctionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FonctionApi
     */
    public getFonction(requestParameters: FonctionApiGetFonctionRequest, options?: any) {
        return FonctionApiFp(this.configuration).getFonction(requestParameters.fonctionId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Fonctions
     * @param {FonctionApiGetFonctionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FonctionApi
     */
    public getFonctions(requestParameters: FonctionApiGetFonctionsRequest = {}, options?: any) {
        return FonctionApiFp(this.configuration).getFonctions(requestParameters.sort, requestParameters.range, requestParameters.filter, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update Fonction
     * @param {FonctionApiUpdateFonctionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FonctionApi
     */
    public updateFonction(requestParameters: FonctionApiUpdateFonctionRequest, options?: any) {
        return FonctionApiFp(this.configuration).updateFonction(requestParameters.fonctionId, requestParameters.fonctionUpdate, options).then((request) => request(this.axios, this.basePath));
    }
}
