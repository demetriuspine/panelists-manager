const { randomBytes } = require('crypto');

const numberOfBytes = 8; // numero atingido por tentativa e erro

function tokenGeneration() { // https://stackoverflow.com/questions/8855687/secure-random-token-in-node-js e https://nodejs.org/api/crypto.html#cryptorandombytessize-callback
  return randomBytes(numberOfBytes).toString('hex');
}

module.exports = tokenGeneration;