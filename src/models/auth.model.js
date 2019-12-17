"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.authModel = {
    /**
     *
     * @param bearerToken
     * @param callback (error, accessToken: object)
     */
    getAccessToken: function (accessToken, callback) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Promise.resolve(null)];
            });
        });
    },
    /**
     *
     * @param clientId
     * @param clientSecret
     * @param callback  (error, client: object)
     *  client is saved in req.client
     */
    getClient: function (clientId, clientSecret, callback) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Promise.resolve(null)];
            });
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
    saveToken: function (token, client, user, callback) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Promise.resolve(null)];
            });
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
    getUser: function (username, password, callback) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Promise.resolve(null)];
            });
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
    verifyScope: function (token, scope, callback) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Promise.resolve(true)];
            });
        });
    },
    /**
     *
     * @param refreshToken
     * @param callback (error, refreshToken: object)
     */
    getRefreshToken: function (refreshToken, callback) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Promise.resolve(null)];
            });
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
    getUserFromClient: function (client, callback) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Promise.resolve(null)];
            });
        });
    }
};
