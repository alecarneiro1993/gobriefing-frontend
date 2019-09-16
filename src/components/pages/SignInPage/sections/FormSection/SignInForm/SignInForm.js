// @flow

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withCookies } from 'react-cookie';
import { Form, reduxForm } from 'redux-form';
import { withTranslation } from 'react-i18next';
import { Mutation } from 'react-apollo';

import { Container, withToast } from 'custom_modules';
import { HALF } from 'utils/constants/values';

import { LOGIN_MUTATION } from './helpers';
import {
  FormFields,
  PasswordRecovery,
  SignUpButton,
  SignInButton,
} from './components';

type Props = {
  email: string,
  password: string,
  t: Function,
  handleToast: Function,
  cookies: Object
};

type State = {
  error: string
};

class SignInForm extends React.Component<Props, State> {
  onSubmit = (e, loginMutation) => {
    e.preventDefault();
    loginMutation();
  };

  setError = (error) => {
    const { handleToast, t } = this.props;
    const { label, type } = error;
    handleToast({ message: t(label), type });
  };

  onError = ({ graphQLErrors }) => {
    if (graphQLErrors) {
      const label = graphQLErrors[0].message;
      this.setError({ label, type: 'error' });
    }
  };

  onCompleted = ({ authenticate: { token } }) => {
    const { cookies } = this.props;
    cookies.set('token', token);
  };

  render() {
    const { t, email, password } = this.props;
    return (
      <Mutation
        mutation={LOGIN_MUTATION}
        variables={{ email, password }}
        onCompleted={this.onCompleted}
        onError={this.onError}
      >
        {(loginMutation) => (
          <Form onSubmit={(e) => this.onSubmit(e, loginMutation)} noValidate>
            <Container height={`${HALF}%`}>
              <FormFields t={t} />
              <PasswordRecovery t={t} />
              <SignUpButton t={t} />
              <SignInButton t={t} />
            </Container>
          </Form>
        )}
      </Mutation>
    );
  }
}

function mapStateToProps(state) {
  const { SignInForm } = state.form;
  if (SignInForm) {
    const { email, password } = SignInForm.values;
    return {
      email,
      password,
    };
  }
  return {
    initialValues: {
      email: '',
      password: '',
    },
  };
}

export default compose(
  connect(mapStateToProps),
  withTranslation(),
  withCookies,
  withToast,
  reduxForm({ form: 'SignInForm' }),
)(SignInForm);
