const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT || 5000, function() {console.log('Webhook server is listening, port 5000')});

const agentBot = require('./lib/agentBot');
const keys = require('./keys');

const agent = new agentBot(keys.lpAccountId, keys.lpAgentLogin, keys.lpAgentPassword);
agent.start();

let reqTimer = setTimeout(function wakeUp() {
    request("https://liveperson.herokuapp.com", function() {
        console.log("WAKE UP DYNO");
    });
    return reqTimer = setTimeout(wakeUp, 1200000);
}, 1200000);