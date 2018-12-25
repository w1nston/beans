import graphqlServer from './graphql-server';

(async function run() {
  await graphqlServer.start();
})();
