import express from 'express';
import oAuth2Server from 'oauth2-server';
import * as mysql from 'mysql';
import { authModel } from './models';
import { UserController } from './controllers';

interface expressApplicationWithOauth extends express.Application {
    oauth?: any
}

const app: expressApplicationWithOauth = express();
const router: any = express.Router();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.oauth = new oAuth2Server({
  model: authModel,
//   grants: ['password', 'authorization_code', 'refresh_token', 'client_credentials'],
//   debug: true, // function can be passed, first arguement will be the error
  accessTokenLifetime: 3600, // default 3600
//   refrestTokenLifetime: 1209600, // if null -> tokens never expire, default: 1209600
//   authCodeLifetime: 30, // default 30
//   clientIDRegex: /^[a-z0-9-_]{3,40}$/i, // default
//   passthroughErrors: false,
//   continueAfterResponse: false
});

const user: any = new UserController(app);
// app.use('/auth', user);
app.get('/', function(req, res) {
  console.log("Hi");
});



const port: number = Number(process.argv[2]) | 8080;
app.listen(port,
    (): void => console.log(`app listening on port ${port}`)
)