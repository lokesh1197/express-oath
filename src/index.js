"use strict";
exports.__esModule = true;
var express = require("express");
var oAuth2Server = require("oauth2-server");
var models_1 = require("./models");
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.oauth = new oAuth2Server({
    model: models_1.authModel,
    //   grants: ['password', 'authorization_code', 'refresh_token', 'client_credentials'],
    //   debug: true, // function can be passed, first arguement will be the error
    accessTokenLifetime: 3600
});
var port = Number(process.argv[2]) | 8000;
app.listen(port, function () { return console.log("app listening on port " + port); });
