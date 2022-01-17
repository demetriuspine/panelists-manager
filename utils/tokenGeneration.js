const { randomBytes } = require('crypto');

const numberOfBytes = 8; // https://trybecourse.slack.com/archives/C023YHXAEGM/p1642459001138500

function tokenGeneration() { // https://stackoverflow.com/questions/8855687/secure-random-token-in-node-js e https://nodejs.org/api/crypto.html#cryptorandombytessize-callback
  return randomBytes(numberOfBytes).toString('hex');
}

module.exports = tokenGeneration;