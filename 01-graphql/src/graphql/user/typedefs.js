import { gql } from 'apollo-server';


// there can only be one type query (schema) in this case we need to use extend
export const userTypeDefs = gql`
   extend type Query {
    user(id:ID!): User!
    users:[User!]!
    }

    type User{
      id: ID!
      firstName: String!
      lastName: String!
      userName: String!
      indexRef: Int!
      createdAt: String!
      # posts [Posts!]!
      
    }
`;


/* {
  "id": "602",
  "firstName": "Elisa",
  "lastName": "Pereira",
  "userName": "elisa.pereira",
  "indexRef": 17,
  "createdAt": "2017-02-15T11:29:40.799Z"
}, */




