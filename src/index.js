'use strict';
// const apiServer = require('./details/api-server');
const graphqlServer = require('./details/graphql-server');

// apiServer.start();
(async function start() {
  await graphqlServer.start();
})();
