import { errorHandler } from '../decorator';

@errorHandler()
export class AuthModel {
    constructor(protected userService: any, protected tokenService: any) {}

    getAccessToken = async (bearerToken: any) => {
        const token = await this.tokenService.getIDFromBearerToken(bearerToken, 'access_token');
        const user = await this.userService.getUserByID(token.userId);
        delete user.password;
        return {
            accessToken: token.accessToken,
            accessTokenExpiresAt: token.accessTokenExpiresAt,
            client: { id: token.clientid, grants: ['password'] },
            user,
            scope: 'basic',
        };
    };

    getClient = async (clientId: any, clientSecret: any) => {
        const client = await this.userService.getClient(clientId, clientSecret);
        if (!client)
            return false;
        return {
            id: client.clientid,
            clientSecret: client.client_secret,
            redirectUris: client.redirectUris,
            grants: ['password'],
        };
    };

    // getRefreshToken : (bearerToken: any) => {
    //     return this.tokenService.getIDFromBearerToken(bearerToken, 'refresh_token');
    // };

    getUser = async (username: string, password: string) => {
        const user = await this.userService.getUser(username, password);
        delete user.password;
        return user;
    };
    verifyScope = async (token: any, scope: string | string[], callback?: Function) => {
        return true;
    };

    saveToken = async (token: any, client: any, user: any) => {
        const newToken = this.tokenService.saveAccessToken(token, client.clientid, user.userid);
        delete user.password;
        return {
            accessToken: token.accessToken,
            accessTokenExpiresAt: token.accessTokenExpiresAt,
            refreshToken: token.refreshToken,
            refreshTokenExpiresAt: token.refreshTokenExpiresAt,
            client,
            scope: token.scope,
            user,
        };
    };


    // generateAccessToken = () => Promise.resolve(uuid.v4());

    // generateRefreshToken = () => Promise.resolve(uuid.v4());

}