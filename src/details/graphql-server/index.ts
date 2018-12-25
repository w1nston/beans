import { ApolloServer, gql } from 'apollo-server';
import { schema } from './schema';
import { resolvers } from './resolvers';

const server = new ApolloServer({ typeDefs: schema, resolvers });

const start = async () => {
  const { url } = await server.listen();
  console.log(`Server ready at ${url}`);
};

const graphqlServer = { start };

export default graphqlServer;
