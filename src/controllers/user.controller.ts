export class UserController {
    constructor(router: any) {
        // router.route('/register').post((req: Express.Request, res: Express.Response) => {
        //     console.log(req);
        // });
        router.post('/login', (req: Express.Request, res: Express.Response) => {
            console.log(req);
        });
    }
}