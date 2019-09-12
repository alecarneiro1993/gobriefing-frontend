import { gql } from 'apollo-boost';

const fields = [
  {
    id: 'sign_up_first_name',
    type: 'text',
    required: true,
    name: 'first_name',
    label: 'pages.sign_up.fields.first_name',
    key: 'sign_up_first_name'
  },
  {
    id: 'sign_up_last_name',
    type: 'text',
    required: true,
    name: 'last_name',
    label: 'pages.sign_up.fields.last_name',
    key: 'sign_up_last_name'
  },
  {
    id: 'sign_up_nickname',
    type: 'text',
    required: true,
    name: 'nickname',
    label: 'pages.sign_up.fields.nickname',
    key: 'sign_up_nickname'
  },
  {
    id: 'sign_up_email',
    type: 'string',
    required: true,
    name: 'email',
    label: 'pages.sign_up.fields.email',
    key: 'sign_in_email'
  },
  {
    id: 'sign_up_password',
    type: 'password',
    required: true,
    name: 'password',
    label: 'pages.sign_up.fields.password',
    key: 'sign_un_password'
  },
  {
    id: 'sign_up_password_confirmation',
    type: 'password',
    required: true,
    name: 'password_confirmation',
    label: 'pages.sign_up.fields.password_confirmation',
    key: 'sign_up_password_confirmation'
  }
];

const CREATE_USER_MUTATION = gql`
  mutation CreateUser(
    $firstName: String!
    $lastName: String!
    $nickname: String!
    $email: String!
    $password: String!
    $passwordConfirmation: String!
  ) {
    createUser(
      input: {
        firstName: $firstName
        lastName: $lastName
        nickname: $nickname
        email: $email
        password: $password
        passwordConfirmation: $passwordConfirmation
      }
    ) {
      isCreated
    }
  }
`;

export { fields, CREATE_USER_MUTATION };
