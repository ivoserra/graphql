import { gql } from 'apollo-server-core';
import { postResolvers } from './post/resolvers';
import { postTypeDefs } from './post/typedevs';
import { userResolvers } from './user/resolvers';
import { userTypeDefs } from './user/typedefs';

// this is the main schema with the main Query
const rootTypeDefs = gql`
type Query {
   _empty: Boolean
  }
`;

const rootResolvers ={
  Query:{
    _empty: ()=> true,
  },
};

export const typeDefs = [rootTypeDefs, userTypeDefs, postTypeDefs];
export const resolvers= [rootResolvers, userResolvers, postResolvers];




