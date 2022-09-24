import { ApolloServer } from 'apollo-server';
import fetch from 'node-fetch';
import { context } from './graphql/context.js';
import { resolvers, typeDefs } from './graphql/schema.js';

//configuration ApolloServer Object
const server = new ApolloServer({
  // definition of types graphql
  typeDefs,
  resolvers,
  context: context,
  
  },
);

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
