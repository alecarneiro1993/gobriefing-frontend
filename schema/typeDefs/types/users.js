import { gql } from "apollo-server";

const users = gql`
  type User {
    id: Int!
    name: String
    email: String
  }

  type Query {
    authenticate(email: String!, password: String!): String
  }
`;

export default users;
