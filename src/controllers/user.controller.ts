import express from 'express';
import { errorHandler } from '../decorator';

@errorHandler()
export class UserController {
    constructor(router: any, service: any, oauth: any) {
        router.route('/register').post(async (req: express.Request, res: express.Response) => {
            console.log(req.body);
            const result = await service.register(req.body.username, req.body.password, req.body.name, req.body.age);
            res.json(result);
            res.end();
        });
        router.post('/login',  oauth.token(), async (req: express.Request, res: express.Response) => {
            console.log(req.body);
            try {
                const result = await service.getUser(req.body.username, req.body.password);
                console.log(result);
                res.json(result);
                res.end();
            } catch (error) {
                console.log(error);
                res.end(error); 
            }
        });

        router.route('/user').get(oauth.authenticate(), async (req: express.Request, res: express.Response) => {
            res.end("You are permitted!!");
        });
    }
}