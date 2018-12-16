'use strict';
const graphqlServer = require('./details/graphql-server');

(async function start() {
  await graphqlServer.start();
})();
