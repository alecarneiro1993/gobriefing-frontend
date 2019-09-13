// @flow

import React from 'react';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withCookies } from 'react-cookie';
import { Form, reduxForm } from 'redux-form';
import { withTranslation } from 'react-i18next';
import { Mutation } from 'react-apollo';

import { Container, ErrorToast } from 'custom_modules';
import { HALF } from 'utils/constants/values';

import { CREATE_USER_MUTATION, validateFields } from './helpers';
import { FormFields, SignUpButton, SignInButton } from './components';
import { isEqual } from 'apollo-utilities';

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
    const error = validateFields(formValues);
    if (isEmpty(error)) {
      return createUserMutation();
    }
    this.setState({ error });
  };

  setError = error => {
    this.setState({ error });
  };

  onError = () => {
    this.setError({ label: 'errors.common.unexpected' });
  };

  onCompleted = ({ createUser }) => {
    const { response } = createUser;
    if (isEqual(response.type, 'error')) {
      return this.setError(response);
    }
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
              onClose={() => this.setError({})}
              message={hasError && t(error.label)}
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
      firstName: 'test',
      lastName: 'test',
      nickname: 'test',
      email: 'test@test.com',
      password: 'test123',
      passwordConfirmation: 'test123'
    }
  };
}

export default compose(
  connect(mapStateToProps),
  withTranslation(),
  withCookies,
  reduxForm({ form: 'SignUpForm' })
)(SignUpForm);
