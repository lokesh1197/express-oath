import * as oauth from 'oauth2-server';

export const authModel: oauth.AuthorizationCodeModel | oauth.ClientCredentialsModel | oauth.RefreshTokenModel | oauth.PasswordModel= {
    /**
     * 
     * @param bearerToken 
     * @param callback (error, accessToken: object)
     */
    async getAccessToken(accessToken: string, callback?: oauth.Callback<oauth.Token>): Promise<oauth.Token | oauth.Falsey> {
        return Promise.resolve(null);
    },

    /**
     * 
     * @param clientId 
     * @param clientSecret 
     * @param callback  (error, client: object)
     *  client is saved in req.client
     */
    async getClient (clientId: string, clientSecret: string | null, callback: oauth.Callback<oauth.Client | oauth.Falsey>): Promise<oauth.Client | oauth.Falsey> {
        return Promise.resolve(null);
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
    async saveToken(token: oauth.Token, client: oauth.Client, user: oauth.User, callback?: oauth.Callback<oauth.Token>): Promise<oauth.Token | oauth.Falsey> {
        return Promise.resolve(null);
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
    async getUser (username: string, password: string, callback: oauth.Callback<oauth.User | oauth.Falsey>) : Promise<oauth.User | oauth.Falsey> {
        return Promise.resolve(null);
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

    async verifyScope(token: oauth.Token, scope: string | string[], callback?: oauth.Callback<boolean>): Promise<boolean> {
        return Promise.resolve(true);
    },

    /**
     * 
     * @param refreshToken 
     * @param callback (error, refreshToken: object)
     */
    async getRefreshToken(refreshToken: string, callback?: oauth.Callback<oauth.RefreshToken>): Promise<oauth.RefreshToken | oauth.Falsey> {
        return Promise.resolve(null);
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
    async getUserFromClient (client: oauth.Client, callback: oauth.Callback<oauth.User | oauth.Falsey>): Promise<oauth.User | oauth.Falsey> {
        return Promise.resolve(null);
    },
    // async getUserFromClient (clientId: string, clientSecret: string, callback: oauth.Callback<oauth.Client | oauth.Falsey>): Promise<oauth.Token | oauth.Falsey> {
    //     return Promise.resolve(null);
    // },

    // Optional for client_credentials
    // /**
    //  * 
    //  * @param type accessToken or refreshToken
    //  * @param req current express request
    //  * @param callback (error, token: string | object | null): string->success, object->reissue, null->revert to default token generator
    //  */
    // async generateToken (type: string, req: object, callback: oauth.Callback<oauth.Client | oauth.Falsey>): Promise<oauth.Token | oauth.Falsey> {
    //     return Promise.resolve(null);
    // },
};