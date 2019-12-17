"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const oauth2_server_1 = __importDefault(require("oauth2-server"));
const models_1 = require("./models");
const app = express_1.default();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.oauth = new oauth2_server_1.default({
    model: models_1.authModel,
    //   grants: ['password', 'authorization_code', 'refresh_token', 'client_credentials'],
    //   debug: true, // function can be passed, first arguement will be the error
    accessTokenLifetime: 3600,
});
const port = Number(process.argv[2]) | 8000;
app.listen(port, () => console.log(`app listening on port ${port}`));
//# sourceMappingURL=index.js.map