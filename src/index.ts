import express from 'express';
import oauthServer from 'express-oauth-server';
import mysql from 'mysql';
import { MySqlDB, UserService, AccessTokenService } from './services';
import { AuthModel } from './models/auth.model';
import { UserController } from './controllers';

const mysqlDBHelper = new MySqlDB(mysql);
const userService = new UserService(mysqlDBHelper);
const accessTokenService = new AccessTokenService(mysqlDBHelper);

const app: express.Application = express();
// const router: any = express.Router();

const authModel = new AuthModel(userService, accessTokenService);
const oauth = new oauthServer({
  model: authModel,
});

app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.post('/oauth/authorize', app.oauth.authorize());
// app.use(app.oauth.errorHandler());

const userController: any = new UserController(app, userService, oauth);

// const ensureAuth = () => [
//   oauth.authenticate(),
//   (req: any, res: any, next: any) => {
//     // simplify access to authenticated user
//     req.user = (res as any).locals.oauth.token.user || undefined;
//     req.scope = (res as any).locals.oauth.token.scope || undefined;
//     req.token = (res as any).locals.oauth.token.accessToken || undefined;
//     next();
//   },
// ];

// // public
// app.get('/', (_req, res) => res.json({ hello: 'world' }));
// app.get('/__health', (_req, res) => res.json({ status: 'alive' }));
// app.post('/oauth/token', oauth.token());

// // private
// app.get('/v1/user/me', ensureAuth(), (req: any, res: any) => res.json({Hi: 'me'}));
// app.get('/v1/client/:id', ensureAuth(), (_req: any, res: any) => res.json({ client: 'alive' }));
// app.post('/v1/client', ensureAuth(), (_req: any, res: any) => res.json({ status: 'client' }));


const port: number = Number(process.argv[2]) | 8080;
app.listen(port,
    (): void => console.log(`app listening on port ${port}`)
)