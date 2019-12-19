import { errorHandler } from '../decorator';

@errorHandler()
export class AccessTokenService {
    constructor (protected dbConnection: any) {}

    async saveAccessToken (token: any, clientid: string | null, userid: string) {
        const query = `INSERT INTO ACCESS_TOKENS (access_token, access_token_expires_on, refresh_token, refresh_token_expires_on, clientid, userid) VALUES ('${token.accessToken}', '${token.accessTokenExpiresOn}', '${token.refresh_token}', '${token.refresh_token_expires_on}', '${clientid}', ${userid})`;
        const result = await this.dbConnection.query(query);
        return result;
    }

    async getIDFromBearerToken (bearerToken: string, tokenType: string) {
        const query = `SELECT * FROM ACCESS_TOKENS WHERE '${tokenType}' = '${bearerToken}'`;
        const result = await this.dbConnection.query(query);
        return result;
    }
}