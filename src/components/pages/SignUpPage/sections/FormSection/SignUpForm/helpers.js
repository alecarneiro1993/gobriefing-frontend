import { gql } from 'apollo-boost';
import {
  isEqual, isEmpty, pickBy, keys, size, set,
} from 'lodash';
import { isEmail } from 'validator';

const fields = [
  {
    id: 'sign_up_first_name',
    type: 'text',
    required: true,
    name: 'firstName',
    label: 'pages.sign_up.fields.first_name',
    key: 'sign_up_first_name',
  },
  {
    id: 'sign_up_last_name',
    type: 'text',
    required: true,
    name: 'lastName',
    label: 'pages.sign_up.fields.last_name',
    key: 'sign_up_last_name',
  },
  {
    id: 'sign_up_nickname',
    type: 'text',
    required: true,
    name: 'nickname',
    label: 'pages.sign_up.fields.nickname',
    key: 'sign_up_nickname',
  },
  {
    id: 'sign_up_email',
    type: 'string',
    required: true,
    name: 'email',
    label: 'pages.sign_up.fields.email',
    key: 'sign_in_email',
  },
  {
    id: 'sign_up_password',
    type: 'password',
    required: true,
    name: 'password',
    label: 'pages.sign_up.fields.password',
    key: 'sign_un_password',
  },
  {
    id: 'sign_up_password_confirmation',
    type: 'password',
    required: true,
    name: 'passwordConfirmation',
    label: 'pages.sign_up.fields.password_confirmation',
    key: 'sign_up_password_confirmation',
  },
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
      response {
        label
        type
        fields
      }
    }
  }
`;

function validateFields(values) {
  const error = {};
  const emptyFields = keys(pickBy(values, (value) => isEmpty(value)));

  if (!isEmpty(emptyFields)) {
    set(error, 'label', 'errors.users.required_fields');
    set(error, 'fields', emptyFields);
    set(error, 'type', 'error');
    return error;
  }

  const { email, password, passwordConfirmation } = values;

  if (!isEmail(email)) {
    set(error, 'label', 'errors.users.invalid_email_format');
    set(error, 'fields', ['email']);
    set(error, 'type', 'error');
  } else if (size(password) < 6) {
    set(error, 'label', 'errors.users.min_password_length');
    set(error, 'fields', ['password']);
    set(error, 'type', 'error');
  } else if (!isEqual(password, passwordConfirmation)) {
    set(error, 'label', 'errors.users.passwords_match');
    set(error, 'fields', ['password', 'passwordConfirmation']);
    set(error, 'type', 'error');
  }
  return error;
}

export { fields, CREATE_USER_MUTATION, validateFields };
