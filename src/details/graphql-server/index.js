'use strict';
const { ApolloServer, gql } = require('apollo-server');
const { schema } = require('./schema');
const { resolvers } = require('./resolvers');

const server = new ApolloServer({ typeDefs: schema, resolvers });

const start = async () => {
  const { url } = await server.listen();
  console.log(`Server ready at ${url}`);
};

module.exports = {
  start,
};
