import express from 'express';
import oAuth2Server from 'oauth2-server';
import * as mysql from 'mysql';
import { authModel } from './models';

interface expressApplicationWithOauth extends express.Application {
    oauth?: any
}

const app: expressApplicationWithOauth = express();
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

const port: number = Number(process.argv[2]) | 8000;
app.listen(port,
    (): void => console.log(`app listening on port ${port}`)
)