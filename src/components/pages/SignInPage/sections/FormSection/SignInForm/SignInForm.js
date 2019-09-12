// @flow

import React from 'react';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { Form, reduxForm } from 'redux-form';
import { withTranslation } from 'react-i18next';
import { Mutation } from 'react-apollo';

import { Container, ErrorToast } from 'custom_modules';
import { HALF } from 'utils/constants/values';

import { LOGIN_MUTATION } from './helpers';
import { setToken } from './actions';
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
  setToken: Function
};

type State = {
  error: string
};

class SignInForm extends React.Component<Props, State> {
  state = { error: '' };

  onSubmit = (e, loginMutation) => {
    e.preventDefault();
    loginMutation();
  };

  setError = (error) => {
    this.setState({ error });
  };

  onError = ({ graphQLErrors }) => {
    if (graphQLErrors) {
      const error = graphQLErrors[0].message;
      this.setError(error);
    }
  };

  onCompleted = ({ authenticate: { token } }) => {
    const { setToken } = this.props;
    setToken(token);
  };

  render() {
    const { t, email, password } = this.props;
    const { error } = this.state;
    const hasError = !isEmpty(error);
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
              <FormFields error={hasError} />
              <PasswordRecovery t={t} />
              <SignUpButton t={t} />
              <SignInButton t={t} />
            </Container>
            <ErrorToast
              open={hasError}
              onClose={() => this.setError('')}
              message={hasError && t(error)}
            />
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setToken }, dispatch);
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withTranslation(),
  reduxForm({ form: 'SignInForm' }),
)(SignInForm);
