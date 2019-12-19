import { errorHandler } from '../decorator';

@errorHandler()
export class MySqlDB {
    constructor(protected mysql: any) {}

    async initConnection() {
        return this.mysql.createConnection({
            "host": 'localhost',
            "user": 'dev-user',
            "password": 'dev',
            "database": 'express_oAuth'
        });
    }

    async query (queryString: string) {
        const connection = await this.initConnection();
        return connection.query(queryString, function(error: any, results: any, fields: any) {
            connection.end();
            if (error) {
                console.error(error);
                return error;
            } else {
                return results;
            }
        });
    }
}