import { gql } from 'apollo-boost';

const fields = [
  {
    id: 'sign_in_email',
    type: 'string',
    required: true,
    name: 'email',
    label: 'pages.sign_in.fields.email',
    key: 'sign_in_email',
  },
  {
    id: 'sign_in_password',
    type: 'password',
    required: true,
    name: 'password',
    label: 'pages.sign_in.fields.password',
    key: 'sign_in_password',
  },
];

const LOGIN_MUTATION = gql`
  mutation LoginUser($email: String!, $password: String!) {
    authenticate(input: { email: $email, password: $password }) {
      token
    }
  }
`;

export { fields, LOGIN_MUTATION };
