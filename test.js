"use strict";

const keys = require("./keys");
const API_AI_TOKEN = keys.APIAITOKEN;
const apiAiClient = require('apiai')(API_AI_TOKEN);

const userSaid = "hello";

const apiaiSession = apiAiClient.textRequest(userSaid, {sessionId: 'liveperson'});

apiaiSession.on("response", (dfResponse) => {
    console.log("\nResponse from DF:");
    console.log(dfResponse);
});
apiaiSession.on('error', error => console.log(error));
apiaiSession.end();