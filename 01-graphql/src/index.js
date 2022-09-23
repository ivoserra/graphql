import { ApolloServer, gql } from 'apollo-server';
// import { resolvers, typeDefs } from './graphql/schema.js';

const server = new ApolloServer({
  // definition of types graphql
  typeDefs: gql`
    type Query {
      hello: String
      
  }`
  


});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
