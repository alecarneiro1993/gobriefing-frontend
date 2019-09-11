import { gql } from "apollo-server";

const users = gql`
  type User {
    id: Int!
    name: String
    email: String
  }

  type Query {
    users: [User]
  }

  type Mutation {
    authenticate(input: AuthenticateInput!): AuthenticatePayload
  }

  input AuthenticateInput {
    email: String!
    password: String!
  }

  type AuthenticatePayload {
    token: String
  }
`;

export default users;
