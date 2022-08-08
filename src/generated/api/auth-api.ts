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
import { BearerResponse } from '../models';
// @ts-ignore
import { BodyResetForgotPasswordApiV2AuthForgotPasswordPost } from '../models';
// @ts-ignore
import { BodyResetResetPasswordApiV2AuthResetPasswordPost } from '../models';
// @ts-ignore
import { BodyVerifyRequestTokenApiV2AuthRequestVerifyTokenPost } from '../models';
// @ts-ignore
import { BodyVerifyVerifyApiV2AuthVerifyPost } from '../models';
// @ts-ignore
import { ErrorModel } from '../models';
// @ts-ignore
import { HTTPValidationError } from '../models';
// @ts-ignore
import { UserRead } from '../models';
/**
 * AuthApi - axios parameter creator
 * @export
 */
export const AuthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Auth:Jwt.Login
         * @param {string} username 
         * @param {string} password 
         * @param {string} [grantType] 
         * @param {string} [scope] 
         * @param {string} [clientId] 
         * @param {string} [clientSecret] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authJwtLogin: async (username: string, password: string, grantType?: string, scope?: string, clientId?: string, clientSecret?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'username' is not null or undefined
            assertParamExists('authJwtLogin', 'username', username)
            // verify required parameter 'password' is not null or undefined
            assertParamExists('authJwtLogin', 'password', password)
            const localVarPath = `/api/v2/auth/jwt/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new URLSearchParams();


            if (grantType !== undefined) { 
                localVarFormParams.set('grant_type', grantType as any);
            }
    
            if (username !== undefined) { 
                localVarFormParams.set('username', username as any);
            }
    
            if (password !== undefined) { 
                localVarFormParams.set('password', password as any);
            }
    
            if (scope !== undefined) { 
                localVarFormParams.set('scope', scope as any);
            }
    
            if (clientId !== undefined) { 
                localVarFormParams.set('client_id', clientId as any);
            }
    
            if (clientSecret !== undefined) { 
                localVarFormParams.set('client_secret', clientSecret as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams.toString();

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Auth:Jwt.Logout
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authJwtLogout: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/auth/jwt/logout`;
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
         * @summary Reset:Forgot Password
         * @param {BodyResetForgotPasswordApiV2AuthForgotPasswordPost} bodyResetForgotPasswordApiV2AuthForgotPasswordPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetForgotPassword: async (bodyResetForgotPasswordApiV2AuthForgotPasswordPost: BodyResetForgotPasswordApiV2AuthForgotPasswordPost, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'bodyResetForgotPasswordApiV2AuthForgotPasswordPost' is not null or undefined
            assertParamExists('resetForgotPassword', 'bodyResetForgotPasswordApiV2AuthForgotPasswordPost', bodyResetForgotPasswordApiV2AuthForgotPasswordPost)
            const localVarPath = `/api/v2/auth/forgot-password`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(bodyResetForgotPasswordApiV2AuthForgotPasswordPost, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Reset:Reset Password
         * @param {BodyResetResetPasswordApiV2AuthResetPasswordPost} bodyResetResetPasswordApiV2AuthResetPasswordPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetResetPassword: async (bodyResetResetPasswordApiV2AuthResetPasswordPost: BodyResetResetPasswordApiV2AuthResetPasswordPost, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'bodyResetResetPasswordApiV2AuthResetPasswordPost' is not null or undefined
            assertParamExists('resetResetPassword', 'bodyResetResetPasswordApiV2AuthResetPasswordPost', bodyResetResetPasswordApiV2AuthResetPasswordPost)
            const localVarPath = `/api/v2/auth/reset-password`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(bodyResetResetPasswordApiV2AuthResetPasswordPost, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Verify:Request-Token
         * @param {BodyVerifyRequestTokenApiV2AuthRequestVerifyTokenPost} bodyVerifyRequestTokenApiV2AuthRequestVerifyTokenPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verifyRequestToken: async (bodyVerifyRequestTokenApiV2AuthRequestVerifyTokenPost: BodyVerifyRequestTokenApiV2AuthRequestVerifyTokenPost, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'bodyVerifyRequestTokenApiV2AuthRequestVerifyTokenPost' is not null or undefined
            assertParamExists('verifyRequestToken', 'bodyVerifyRequestTokenApiV2AuthRequestVerifyTokenPost', bodyVerifyRequestTokenApiV2AuthRequestVerifyTokenPost)
            const localVarPath = `/api/v2/auth/request-verify-token`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(bodyVerifyRequestTokenApiV2AuthRequestVerifyTokenPost, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Verify:Verify
         * @param {BodyVerifyVerifyApiV2AuthVerifyPost} bodyVerifyVerifyApiV2AuthVerifyPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verifyVerify: async (bodyVerifyVerifyApiV2AuthVerifyPost: BodyVerifyVerifyApiV2AuthVerifyPost, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'bodyVerifyVerifyApiV2AuthVerifyPost' is not null or undefined
            assertParamExists('verifyVerify', 'bodyVerifyVerifyApiV2AuthVerifyPost', bodyVerifyVerifyApiV2AuthVerifyPost)
            const localVarPath = `/api/v2/auth/verify`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(bodyVerifyVerifyApiV2AuthVerifyPost, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Auth:Jwt.Login
         * @param {string} username 
         * @param {string} password 
         * @param {string} [grantType] 
         * @param {string} [scope] 
         * @param {string} [clientId] 
         * @param {string} [clientSecret] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authJwtLogin(username: string, password: string, grantType?: string, scope?: string, clientId?: string, clientSecret?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BearerResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authJwtLogin(username, password, grantType, scope, clientId, clientSecret, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Auth:Jwt.Logout
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authJwtLogout(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authJwtLogout(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Reset:Forgot Password
         * @param {BodyResetForgotPasswordApiV2AuthForgotPasswordPost} bodyResetForgotPasswordApiV2AuthForgotPasswordPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async resetForgotPassword(bodyResetForgotPasswordApiV2AuthForgotPasswordPost: BodyResetForgotPasswordApiV2AuthForgotPasswordPost, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resetForgotPassword(bodyResetForgotPasswordApiV2AuthForgotPasswordPost, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Reset:Reset Password
         * @param {BodyResetResetPasswordApiV2AuthResetPasswordPost} bodyResetResetPasswordApiV2AuthResetPasswordPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async resetResetPassword(bodyResetResetPasswordApiV2AuthResetPasswordPost: BodyResetResetPasswordApiV2AuthResetPasswordPost, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resetResetPassword(bodyResetResetPasswordApiV2AuthResetPasswordPost, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Verify:Request-Token
         * @param {BodyVerifyRequestTokenApiV2AuthRequestVerifyTokenPost} bodyVerifyRequestTokenApiV2AuthRequestVerifyTokenPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async verifyRequestToken(bodyVerifyRequestTokenApiV2AuthRequestVerifyTokenPost: BodyVerifyRequestTokenApiV2AuthRequestVerifyTokenPost, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.verifyRequestToken(bodyVerifyRequestTokenApiV2AuthRequestVerifyTokenPost, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Verify:Verify
         * @param {BodyVerifyVerifyApiV2AuthVerifyPost} bodyVerifyVerifyApiV2AuthVerifyPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async verifyVerify(bodyVerifyVerifyApiV2AuthVerifyPost: BodyVerifyVerifyApiV2AuthVerifyPost, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserRead>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.verifyVerify(bodyVerifyVerifyApiV2AuthVerifyPost, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthApiFp(configuration)
    return {
        /**
         * 
         * @summary Auth:Jwt.Login
         * @param {string} username 
         * @param {string} password 
         * @param {string} [grantType] 
         * @param {string} [scope] 
         * @param {string} [clientId] 
         * @param {string} [clientSecret] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authJwtLogin(username: string, password: string, grantType?: string, scope?: string, clientId?: string, clientSecret?: string, options?: any): AxiosPromise<BearerResponse> {
            return localVarFp.authJwtLogin(username, password, grantType, scope, clientId, clientSecret, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Auth:Jwt.Logout
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authJwtLogout(options?: any): AxiosPromise<any> {
            return localVarFp.authJwtLogout(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Reset:Forgot Password
         * @param {BodyResetForgotPasswordApiV2AuthForgotPasswordPost} bodyResetForgotPasswordApiV2AuthForgotPasswordPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetForgotPassword(bodyResetForgotPasswordApiV2AuthForgotPasswordPost: BodyResetForgotPasswordApiV2AuthForgotPasswordPost, options?: any): AxiosPromise<any> {
            return localVarFp.resetForgotPassword(bodyResetForgotPasswordApiV2AuthForgotPasswordPost, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Reset:Reset Password
         * @param {BodyResetResetPasswordApiV2AuthResetPasswordPost} bodyResetResetPasswordApiV2AuthResetPasswordPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetResetPassword(bodyResetResetPasswordApiV2AuthResetPasswordPost: BodyResetResetPasswordApiV2AuthResetPasswordPost, options?: any): AxiosPromise<any> {
            return localVarFp.resetResetPassword(bodyResetResetPasswordApiV2AuthResetPasswordPost, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Verify:Request-Token
         * @param {BodyVerifyRequestTokenApiV2AuthRequestVerifyTokenPost} bodyVerifyRequestTokenApiV2AuthRequestVerifyTokenPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verifyRequestToken(bodyVerifyRequestTokenApiV2AuthRequestVerifyTokenPost: BodyVerifyRequestTokenApiV2AuthRequestVerifyTokenPost, options?: any): AxiosPromise<any> {
            return localVarFp.verifyRequestToken(bodyVerifyRequestTokenApiV2AuthRequestVerifyTokenPost, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Verify:Verify
         * @param {BodyVerifyVerifyApiV2AuthVerifyPost} bodyVerifyVerifyApiV2AuthVerifyPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verifyVerify(bodyVerifyVerifyApiV2AuthVerifyPost: BodyVerifyVerifyApiV2AuthVerifyPost, options?: any): AxiosPromise<UserRead> {
            return localVarFp.verifyVerify(bodyVerifyVerifyApiV2AuthVerifyPost, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for authJwtLogin operation in AuthApi.
 * @export
 * @interface AuthApiAuthJwtLoginRequest
 */
export interface AuthApiAuthJwtLoginRequest {
    /**
     * 
     * @type {string}
     * @memberof AuthApiAuthJwtLogin
     */
    readonly username: string

    /**
     * 
     * @type {string}
     * @memberof AuthApiAuthJwtLogin
     */
    readonly password: string

    /**
     * 
     * @type {string}
     * @memberof AuthApiAuthJwtLogin
     */
    readonly grantType?: string

    /**
     * 
     * @type {string}
     * @memberof AuthApiAuthJwtLogin
     */
    readonly scope?: string

    /**
     * 
     * @type {string}
     * @memberof AuthApiAuthJwtLogin
     */
    readonly clientId?: string

    /**
     * 
     * @type {string}
     * @memberof AuthApiAuthJwtLogin
     */
    readonly clientSecret?: string
}

/**
 * Request parameters for resetForgotPassword operation in AuthApi.
 * @export
 * @interface AuthApiResetForgotPasswordRequest
 */
export interface AuthApiResetForgotPasswordRequest {
    /**
     * 
     * @type {BodyResetForgotPasswordApiV2AuthForgotPasswordPost}
     * @memberof AuthApiResetForgotPassword
     */
    readonly bodyResetForgotPasswordApiV2AuthForgotPasswordPost: BodyResetForgotPasswordApiV2AuthForgotPasswordPost
}

/**
 * Request parameters for resetResetPassword operation in AuthApi.
 * @export
 * @interface AuthApiResetResetPasswordRequest
 */
export interface AuthApiResetResetPasswordRequest {
    /**
     * 
     * @type {BodyResetResetPasswordApiV2AuthResetPasswordPost}
     * @memberof AuthApiResetResetPassword
     */
    readonly bodyResetResetPasswordApiV2AuthResetPasswordPost: BodyResetResetPasswordApiV2AuthResetPasswordPost
}

/**
 * Request parameters for verifyRequestToken operation in AuthApi.
 * @export
 * @interface AuthApiVerifyRequestTokenRequest
 */
export interface AuthApiVerifyRequestTokenRequest {
    /**
     * 
     * @type {BodyVerifyRequestTokenApiV2AuthRequestVerifyTokenPost}
     * @memberof AuthApiVerifyRequestToken
     */
    readonly bodyVerifyRequestTokenApiV2AuthRequestVerifyTokenPost: BodyVerifyRequestTokenApiV2AuthRequestVerifyTokenPost
}

/**
 * Request parameters for verifyVerify operation in AuthApi.
 * @export
 * @interface AuthApiVerifyVerifyRequest
 */
export interface AuthApiVerifyVerifyRequest {
    /**
     * 
     * @type {BodyVerifyVerifyApiV2AuthVerifyPost}
     * @memberof AuthApiVerifyVerify
     */
    readonly bodyVerifyVerifyApiV2AuthVerifyPost: BodyVerifyVerifyApiV2AuthVerifyPost
}

/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export class AuthApi extends BaseAPI {
    /**
     * 
     * @summary Auth:Jwt.Login
     * @param {AuthApiAuthJwtLoginRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authJwtLogin(requestParameters: AuthApiAuthJwtLoginRequest, options?: any) {
        return AuthApiFp(this.configuration).authJwtLogin(requestParameters.username, requestParameters.password, requestParameters.grantType, requestParameters.scope, requestParameters.clientId, requestParameters.clientSecret, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Auth:Jwt.Logout
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authJwtLogout(options?: any) {
        return AuthApiFp(this.configuration).authJwtLogout(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Reset:Forgot Password
     * @param {AuthApiResetForgotPasswordRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public resetForgotPassword(requestParameters: AuthApiResetForgotPasswordRequest, options?: any) {
        return AuthApiFp(this.configuration).resetForgotPassword(requestParameters.bodyResetForgotPasswordApiV2AuthForgotPasswordPost, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Reset:Reset Password
     * @param {AuthApiResetResetPasswordRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public resetResetPassword(requestParameters: AuthApiResetResetPasswordRequest, options?: any) {
        return AuthApiFp(this.configuration).resetResetPassword(requestParameters.bodyResetResetPasswordApiV2AuthResetPasswordPost, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Verify:Request-Token
     * @param {AuthApiVerifyRequestTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public verifyRequestToken(requestParameters: AuthApiVerifyRequestTokenRequest, options?: any) {
        return AuthApiFp(this.configuration).verifyRequestToken(requestParameters.bodyVerifyRequestTokenApiV2AuthRequestVerifyTokenPost, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Verify:Verify
     * @param {AuthApiVerifyVerifyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public verifyVerify(requestParameters: AuthApiVerifyVerifyRequest, options?: any) {
        return AuthApiFp(this.configuration).verifyVerify(requestParameters.bodyVerifyVerifyApiV2AuthVerifyPost, options).then((request) => request(this.axios, this.basePath));
    }
}