import { gql } from 'apollo-server';

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
    createUser(input: CreateUserInput!): CreateUserPayload
  }

  input AuthenticateInput {
    email: String!
    password: String!
  }

  type AuthenticatePayload {
    token: String
  }

  input CreateUserInput {
    firstName: String!
    lastName: String!
    nickname: String!
    email: String!
    password: String!
    passwordConfirmation: String!
  }

  type CreateUserPayload {
    response: CreateUserResponse
  }

  type CreateUserResponse {
    label: String
    type: String
    fields: [String]
  }
`;

export default users;
