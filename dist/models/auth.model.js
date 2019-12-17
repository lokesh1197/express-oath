"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authModel = {
    /**
     *
     * @param bearerToken
     * @param callback (error, accessToken: object)
     */
    getAccessToken(accessToken, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(null);
        });
    },
    /**
     *
     * @param clientId
     * @param clientSecret
     * @param callback  (error, client: object)
     *  client is saved in req.client
     */
    getClient(clientId, clientSecret, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(null);
        });
    },
    // /**
    //  * 
    //  * @param clientId 
    //  * @param grantType 
    //  * @param callback (error, allowed: boolean)
    //  */
    // async grantTypeAllowed (clientId: string, grantType: string, callback: oauth.Callback<oauth.Client | oauth.Falsey>): Promise<oauth.Client | oauth.Falsey> {
    //     return Promise.resolve(null);
    // },
    // /**
    //  * 
    //  * @param accessToken 
    //  * @param clientId 
    //  * @param expires 
    //  * @param user 
    //  * @param callback (error)
    //  */
    // async saveAccessToken (accessToken: string, clientId: string, expires: Date, user: object, callback: oauth.Callback<oauth.Client | oauth.Falsey>): Promise<oauth.Token | oauth.Falsey> {
    //     return Promise.resolve(null);
    // },
    saveToken(token, client, user, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(null);
        });
    },
    // For authorization_code grant type
    // /**
    //  * 
    //  * @param authCode 
    //  * @param callback (error, authCode: object)
    //  */
    // async getAuthCode (authCode: string, callback: oauth.Callback<oauth.Client | oauth.Falsey>): Promise<oauth.Token | oauth.Falsey> {
    //     return Promise.resolve(null);
    // },
    // /**
    //  * 
    //  * @param authCode 
    //  * @param clientId 
    //  * @param expires 
    //  * @param callback (error)
    //  */
    // async saveAuthCode (authCode: string, clientId: string, expires: Date, callback: oauth.Callback<oauth.Client | oauth.Falsey>) : Promise<oauth.Token | oauth.Falsey> {
    //     return Promise.resolve(null);
    // },
    // For password grant type
    /**
     *
     * @param username
     * @param password
     * @param callback (error, user: object)
     */
    getUser(username, password, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(null);
        });
    },
    // For refresh_token grant type
    // /**
    //  * 
    //  * @param refreshToken 
    //  * @param clientId 
    //  * @param expires 
    //  * @param user 
    //  * @param callback (error)
    //  */
    // async saveRefreshToken (refreshToken: string, clientId: string, expires: Date, user: object, callback: oauth.Callback<oauth.Client | oauth.Falsey>): Promise<oauth.Token | oauth.Falsey> {
    //     return Promise.resolve(null);
    // },
    verifyScope(token, scope, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(true);
        });
    },
    /**
     *
     * @param refreshToken
     * @param callback (error, refreshToken: object)
     */
    getRefreshToken(refreshToken, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(null);
        });
    },
    // Optional for refresh_token
    // /**
    //  * 
    //  * @param refreshToken 
    //  * @param callback (error)
    //  */
    // async revokeRefreshtoken (refreshToken: string, callback: oauth.Callback<oauth.Client | oauth.Falsey>): Promise<oauth.Token | oauth.Falsey> {
    //     return Promise.resolve(null);
    // },
    // For client_credentials grant type
    /**
     *
     * @param clientId
     * @param clientSecret
     * @param callback (error, user: object)
     */
    getUserFromClient(client, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(null);
        });
    },
};
//# sourceMappingURL=auth.model.js.map