const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT || 5000, function() {console.log('Webhook server is listening, port 5000')});

const agentBot = require('./lib/agentBot');

/*let keys = {};
try {
    keys = require("./keys");
} catch (error) {
    console.log('Keys.js file not found');
}*/

//const agent = new agentBot((keys.lpAccountId || process.env.lpAccountId), (keys.lpAgentLogin || process.env.lpAgentLogin), (keys.lpAgentPassword || process.env.lpAgentPassword));
const agent = new agentBot(process.env.lpAccountId, process.env.lpAgentLogin, process.env.lpAgentPassword);
agent.start();

let reqTimer = setTimeout(function wakeUp() {
    request("https://liveperson.herokuapp.com", function() {
        console.log("WAKE UP DYNO");
    });
    return reqTimer = setTimeout(wakeUp, 1200000);
}, 1200000);