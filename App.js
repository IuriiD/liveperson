const agentBot = require('./lib/agentBot');
const keys = require('./keys');

const agent = new agentBot(keys.lpAccountId, keys.lpAgentLogin, keys.lpAgentPassword);
agent.start();