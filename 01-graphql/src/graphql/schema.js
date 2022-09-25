import { gql } from "apollo-server-core";
import { apiFiltersResolvers } from "./api-filters/resolver";
import { apiFiltersTypeDefs } from "./api-filters/typedefs";
import { postResolvers } from "./post/resolvers";
import { postTypeDefs } from "./post/typedevs";
import { userResolvers } from "./user/resolvers";
import { userTypeDefs } from "./user/typedefs";

// this is the main schema with the main Query
const rootTypeDefs = gql`
  type Query {
    _empty: Boolean
  }
`;

const rootResolvers = {
  Query: {
    _empty: () => true,
  },
};

export const typeDefs = [
  rootTypeDefs,
  userTypeDefs,
  postTypeDefs,
  apiFiltersTypeDefs,
];

export const resolvers = [
  rootResolvers,
  userResolvers,
  postResolvers,
  apiFiltersResolvers,
];
