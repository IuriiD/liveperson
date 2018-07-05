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