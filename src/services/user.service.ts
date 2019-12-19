import { errorHandler } from '../decorator';

@errorHandler()
export class UserService {
    constructor (protected dbConnection: any) {}

    async register (username: string, password: string, name: string, age: string) {
        const query = `INSERT INTO USERS (username, password, name, age) VALUES ('${username}', SHA('${password}'), '${name}', ${age})`;
        const result = await this.dbConnection.query(query);
        return result;        
    }

    async getUserByID (userid: any) {
        const query = `SELECT * FROM USERS WHERE userid = '${userid}'`;
        const result = await this.dbConnection.query(query);
        return result;        
    }

    async getUser (username: string, password: string) {
        const query = `SELECT * FROM USERS WHERE username = '${username}' AND password = 'SHA('${password}')'`;
        const result = await this.dbConnection.query(query);
        return result;        
    }

    async getClient (clientId: string, clientSecret: string) {
        const query = `SELECT * FROM CLIENTS WHERE clientid = '${clientId}' AND client_secret = '${clientSecret}'`;
        const result = await this.dbConnection.query(query);
        return result;        
    }
}