import { gql } from 'apollo-boost';

const fields = [
  {
    id: 'sign_in_email',
    type: 'string',
    required: true,
    name: 'email',
    label: 'Email',
    key: 'sign_in_email'
  },
  {
    id: 'sign_in_password',
    type: 'password',
    required: true,
    name: 'password',
    label: 'Password',
    key: 'sign_in_Password'
  }
];

const LOGIN_MUTATION = gql`
  mutation LoginUser($email: String!, $password: String!) {
    authenticate(input: { email: $email, password: $password }) {
      token
    }
  }
`;

export { fields, LOGIN_MUTATION };
