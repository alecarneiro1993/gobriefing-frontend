// @flow

import React from 'react';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withCookies } from 'react-cookie';
import { Form, reduxForm } from 'redux-form';
import { withTranslation } from 'react-i18next';
import { Mutation } from 'react-apollo';

import { Container, withToast } from 'custom_modules';
import { HALF } from 'utils/constants/values';

import { isEqual } from 'apollo-utilities';
import { CREATE_USER_MUTATION, validateFields } from './helpers';
import { FormFields, SignUpButton, SignInButton } from './components';

type Props = {
  t: Function,
  handleToast: Function,
  formValues: Object
};

type State = {
  fieldsErrors: Array<string>
};

class SignUpForm extends React.Component<Props, State> {
  state = { fieldsErrors: [] };

  onSubmit = (e, createUserMutation) => {
    e.preventDefault();
    const { formValues } = this.props;
    const error = validateFields(formValues);
    if (isEmpty(error)) {
      createUserMutation();
    } else {
      this.setError(error);
    }
  };

  setError = (error: {
    label: string,
    type: string,
    fields?: Array<string>
  }) => {
    const { handleToast, t } = this.props;
    const { fields = [], label, type } = error;
    handleToast({ type, message: t(label) });
    this.setState({ fieldsErrors: fields });
  };

  onError = () => {
    this.setError({ label: 'errors.common.unexpected', type: 'error' });
  };

  onCompleted = ({ createUser }) => {
    const { response } = createUser;
    if (isEqual(response.type, 'error')) this.setError(response);
  };

  render() {
    const { t, formValues } = this.props;
    const { fieldsErrors } = this.state;
    return (
      <Mutation
        mutation={CREATE_USER_MUTATION}
        variables={{ ...formValues }}
        onCompleted={this.onCompleted}
        onError={this.onError}
      >
        {(createUserMutation) => (
          <Form onSubmit={(e) => this.onSubmit(e, createUserMutation)} noValidate>
            <Container height={`${HALF}%`}>
              <FormFields error={fieldsErrors} t={t} />
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
  const { SignUpForm } = state.form;
  if (SignUpForm) {
    const { values: formValues } = SignUpForm;
    return {
      formValues,
    };
  }
  return {
    initialValues: {
      firstName: 'test',
      lastName: 'test',
      nickname: 'test',
      email: 'test@test.com',
      password: 'test123',
      passwordConfirmation: 'test123',
    },
  };
}

export default compose(
  connect(mapStateToProps),
  withTranslation(),
  withToast,
  withCookies,
  reduxForm({ form: 'SignUpForm' }),
)(SignUpForm);
