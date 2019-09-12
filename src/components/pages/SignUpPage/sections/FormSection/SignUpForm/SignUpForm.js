// @flow

import React from 'react';
import { isEmpty, map, snakeCase } from 'lodash';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withCookies } from 'react-cookie';
import { Form, reduxForm } from 'redux-form';
import { withTranslation } from 'react-i18next';
import { Mutation } from 'react-apollo';

import { Container, ErrorToast } from 'custom_modules';
import { HALF } from 'utils/constants/values';

import { CREATE_USER_MUTATION } from './helpers';
import { FormFields, SignUpButton, SignInButton } from './components';

type Props = {
  email: string,
  password: string,
  t: Function,
  cookies: Object
};

type State = {
  error: string
};

class SignUpForm extends React.Component<Props, State> {
  state = { error: {} };

  onSubmit = (e, createUserMutation) => {
    e.preventDefault();
    const { formValues } = this.props;
    const emptyFields = map(formValues, (value, key) => isEmpty(value) && key);
    if (!isEmpty(emptyFields)) {
      this.setState({
        error: { label: 'errors.users.required_fields', fields: emptyFields }
      });
    }
  };

  setError = error => {
    this.setState({ error });
  };

  onError = ({ graphQLErrors }) => {
    if (graphQLErrors) {
      const error = graphQLErrors[0].message;
      this.setError(error);
    }
  };

  onCompleted = ({ authenticate: { token } }) => {
    const { cookies } = this.props;
    cookies.set('token', token);
  };

  render() {
    const { t, formValues } = this.props;
    const { error } = this.state;
    const hasError = !isEmpty(error);
    return (
      <Mutation
        mutation={CREATE_USER_MUTATION}
        variables={{ ...formValues }}
        onCompleted={this.onCompleted}
        onError={this.onError}
      >
        {createUserMutation => (
          <Form onSubmit={e => this.onSubmit(e, createUserMutation)} noValidate>
            <Container height={`${HALF}%`}>
              <FormFields error={error} t={t} />
              <SignUpButton t={t} />
              <SignInButton t={t} />
            </Container>
            <ErrorToast
              open={hasError}
              onClose={() => this.setError('')}
              message={
                hasError &&
                `${t(error.label)}: ${map(
                  error.fields,
                  field => ` ${t(`pages.sign_up.fields.${snakeCase(field)}`)}`
                )}`
              }
            />
          </Form>
        )}
      </Mutation>
    );
  }
}

function mapStateToProps(state) {
  const { SignUpForm } = state.form;
  if (SignUpForm) {
    const { values: formValues } = SignUpForm;
    return {
      formValues
    };
  }
  return {
    initialValues: {
      firstName: '',
      lastName: '',
      nickname: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  };
}

export default compose(
  connect(mapStateToProps),
  withTranslation(),
  withCookies,
  reduxForm({ form: 'SignUpForm' })
)(SignUpForm);
