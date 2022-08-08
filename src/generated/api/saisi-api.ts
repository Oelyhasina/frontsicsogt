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
import { Saisi } from '../models';
// @ts-ignore
import { SaisiCreate } from '../models';
// @ts-ignore
import { SaisiUpdate } from '../models';
/**
 * SaisiApi - axios parameter creator
 * @export
 */
export const SaisiApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create Saisi
         * @param {SaisiCreate} saisiCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSaisi: async (saisiCreate: SaisiCreate, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'saisiCreate' is not null or undefined
            assertParamExists('createSaisi', 'saisiCreate', saisiCreate)
            const localVarPath = `/api/v2/saisi`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(saisiCreate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Create Saisis
         * @param {Array<Saisi>} saisi 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSaisis: async (saisi: Array<Saisi>, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'saisi' is not null or undefined
            assertParamExists('createSaisis', 'saisi', saisi)
            const localVarPath = `/api/v2/saisis`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(saisi, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete Saisi
         * @param {number} saisiId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSaisi: async (saisiId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'saisiId' is not null or undefined
            assertParamExists('deleteSaisi', 'saisiId', saisiId)
            const localVarPath = `/api/v2/saisi/{saisiId}`
                .replace(`{${"saisiId"}}`, encodeURIComponent(String(saisiId)));
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
         * @summary Get Saisi
         * @param {number} saisiId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSaisi: async (saisiId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'saisiId' is not null or undefined
            assertParamExists('getSaisi', 'saisiId', saisiId)
            const localVarPath = `/api/v2/saisi/{saisiId}`
                .replace(`{${"saisiId"}}`, encodeURIComponent(String(saisiId)));
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
         * @summary Get Saisis
         * @param {string} [sort] Format: &#x60;[\&quot;field_name\&quot;, \&quot;direction\&quot;]&#x60;
         * @param {string} [range] Format: &#x60;[start, end]&#x60;
         * @param {any} [filter] Format: &#x60;{cle, valeur}&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSaisis: async (sort?: string, range?: string, filter?: any, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/saisi`;
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
         * @summary Update Saisi
         * @param {number} saisiId 
         * @param {SaisiUpdate} saisiUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSaisi: async (saisiId: number, saisiUpdate: SaisiUpdate, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'saisiId' is not null or undefined
            assertParamExists('updateSaisi', 'saisiId', saisiId)
            // verify required parameter 'saisiUpdate' is not null or undefined
            assertParamExists('updateSaisi', 'saisiUpdate', saisiUpdate)
            const localVarPath = `/api/v2/saisi/{saisiId}`
                .replace(`{${"saisiId"}}`, encodeURIComponent(String(saisiId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(saisiUpdate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SaisiApi - functional programming interface
 * @export
 */
export const SaisiApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SaisiApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create Saisi
         * @param {SaisiCreate} saisiCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createSaisi(saisiCreate: SaisiCreate, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Saisi>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createSaisi(saisiCreate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Create Saisis
         * @param {Array<Saisi>} saisi 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createSaisis(saisi: Array<Saisi>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Saisi>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createSaisis(saisi, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete Saisi
         * @param {number} saisiId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteSaisi(saisiId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteSaisi(saisiId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get Saisi
         * @param {number} saisiId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSaisi(saisiId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Saisi>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSaisi(saisiId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get Saisis
         * @param {string} [sort] Format: &#x60;[\&quot;field_name\&quot;, \&quot;direction\&quot;]&#x60;
         * @param {string} [range] Format: &#x60;[start, end]&#x60;
         * @param {any} [filter] Format: &#x60;{cle, valeur}&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSaisis(sort?: string, range?: string, filter?: any, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Saisi>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSaisis(sort, range, filter, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update Saisi
         * @param {number} saisiId 
         * @param {SaisiUpdate} saisiUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateSaisi(saisiId: number, saisiUpdate: SaisiUpdate, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Saisi>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateSaisi(saisiId, saisiUpdate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SaisiApi - factory interface
 * @export
 */
export const SaisiApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SaisiApiFp(configuration)
    return {
        /**
         * 
         * @summary Create Saisi
         * @param {SaisiCreate} saisiCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSaisi(saisiCreate: SaisiCreate, options?: any): AxiosPromise<Saisi> {
            return localVarFp.createSaisi(saisiCreate, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create Saisis
         * @param {Array<Saisi>} saisi 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSaisis(saisi: Array<Saisi>, options?: any): AxiosPromise<Array<Saisi>> {
            return localVarFp.createSaisis(saisi, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete Saisi
         * @param {number} saisiId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSaisi(saisiId: number, options?: any): AxiosPromise<any> {
            return localVarFp.deleteSaisi(saisiId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Saisi
         * @param {number} saisiId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSaisi(saisiId: number, options?: any): AxiosPromise<Saisi> {
            return localVarFp.getSaisi(saisiId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Saisis
         * @param {string} [sort] Format: &#x60;[\&quot;field_name\&quot;, \&quot;direction\&quot;]&#x60;
         * @param {string} [range] Format: &#x60;[start, end]&#x60;
         * @param {any} [filter] Format: &#x60;{cle, valeur}&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSaisis(sort?: string, range?: string, filter?: any, options?: any): AxiosPromise<Array<Saisi>> {
            return localVarFp.getSaisis(sort, range, filter, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update Saisi
         * @param {number} saisiId 
         * @param {SaisiUpdate} saisiUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSaisi(saisiId: number, saisiUpdate: SaisiUpdate, options?: any): AxiosPromise<Saisi> {
            return localVarFp.updateSaisi(saisiId, saisiUpdate, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createSaisi operation in SaisiApi.
 * @export
 * @interface SaisiApiCreateSaisiRequest
 */
export interface SaisiApiCreateSaisiRequest {
    /**
     * 
     * @type {SaisiCreate}
     * @memberof SaisiApiCreateSaisi
     */
    readonly saisiCreate: SaisiCreate
}

/**
 * Request parameters for createSaisis operation in SaisiApi.
 * @export
 * @interface SaisiApiCreateSaisisRequest
 */
export interface SaisiApiCreateSaisisRequest {
    /**
     * 
     * @type {Array<Saisi>}
     * @memberof SaisiApiCreateSaisis
     */
    readonly saisi: Array<Saisi>
}

/**
 * Request parameters for deleteSaisi operation in SaisiApi.
 * @export
 * @interface SaisiApiDeleteSaisiRequest
 */
export interface SaisiApiDeleteSaisiRequest {
    /**
     * 
     * @type {number}
     * @memberof SaisiApiDeleteSaisi
     */
    readonly saisiId: number
}

/**
 * Request parameters for getSaisi operation in SaisiApi.
 * @export
 * @interface SaisiApiGetSaisiRequest
 */
export interface SaisiApiGetSaisiRequest {
    /**
     * 
     * @type {number}
     * @memberof SaisiApiGetSaisi
     */
    readonly saisiId: number
}

/**
 * Request parameters for getSaisis operation in SaisiApi.
 * @export
 * @interface SaisiApiGetSaisisRequest
 */
export interface SaisiApiGetSaisisRequest {
    /**
     * Format: &#x60;[\&quot;field_name\&quot;, \&quot;direction\&quot;]&#x60;
     * @type {string}
     * @memberof SaisiApiGetSaisis
     */
    readonly sort?: string

    /**
     * Format: &#x60;[start, end]&#x60;
     * @type {string}
     * @memberof SaisiApiGetSaisis
     */
    readonly range?: string

    /**
     * Format: &#x60;{cle, valeur}&#x60;
     * @type {any}
     * @memberof SaisiApiGetSaisis
     */
    readonly filter?: any
}

/**
 * Request parameters for updateSaisi operation in SaisiApi.
 * @export
 * @interface SaisiApiUpdateSaisiRequest
 */
export interface SaisiApiUpdateSaisiRequest {
    /**
     * 
     * @type {number}
     * @memberof SaisiApiUpdateSaisi
     */
    readonly saisiId: number

    /**
     * 
     * @type {SaisiUpdate}
     * @memberof SaisiApiUpdateSaisi
     */
    readonly saisiUpdate: SaisiUpdate
}

/**
 * SaisiApi - object-oriented interface
 * @export
 * @class SaisiApi
 * @extends {BaseAPI}
 */
export class SaisiApi extends BaseAPI {
    /**
     * 
     * @summary Create Saisi
     * @param {SaisiApiCreateSaisiRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SaisiApi
     */
    public createSaisi(requestParameters: SaisiApiCreateSaisiRequest, options?: any) {
        return SaisiApiFp(this.configuration).createSaisi(requestParameters.saisiCreate, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create Saisis
     * @param {SaisiApiCreateSaisisRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SaisiApi
     */
    public createSaisis(requestParameters: SaisiApiCreateSaisisRequest, options?: any) {
        return SaisiApiFp(this.configuration).createSaisis(requestParameters.saisi, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete Saisi
     * @param {SaisiApiDeleteSaisiRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SaisiApi
     */
    public deleteSaisi(requestParameters: SaisiApiDeleteSaisiRequest, options?: any) {
        return SaisiApiFp(this.configuration).deleteSaisi(requestParameters.saisiId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Saisi
     * @param {SaisiApiGetSaisiRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SaisiApi
     */
    public getSaisi(requestParameters: SaisiApiGetSaisiRequest, options?: any) {
        return SaisiApiFp(this.configuration).getSaisi(requestParameters.saisiId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Saisis
     * @param {SaisiApiGetSaisisRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SaisiApi
     */
    public getSaisis(requestParameters: SaisiApiGetSaisisRequest = {}, options?: any) {
        return SaisiApiFp(this.configuration).getSaisis(requestParameters.sort, requestParameters.range, requestParameters.filter, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update Saisi
     * @param {SaisiApiUpdateSaisiRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SaisiApi
     */
    public updateSaisi(requestParameters: SaisiApiUpdateSaisiRequest, options?: any) {
        return SaisiApiFp(this.configuration).updateSaisi(requestParameters.saisiId, requestParameters.saisiUpdate, options).then((request) => request(this.axios, this.basePath));
    }
}
