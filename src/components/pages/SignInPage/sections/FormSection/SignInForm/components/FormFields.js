// @flow

import React from 'react';
import { map } from 'lodash';
import { Field } from 'redux-form';

import { FormText } from 'custom_modules/form';
import { Row, Column } from 'custom_modules/layout';
import { CENTER, NORMAL } from 'utils/constants/values';

import { fields } from '../helpers';

function FormFields({ error }: { error: boolean }) {
  return map(fields, ({ key, ...rest }) => (
    <Row key={key} alignItems={CENTER} justify={CENTER}>
      <Column xs={8} sm={8} md={8} lg={8} xl={8}>
        <Field
          error={error}
          margin={NORMAL}
          fullWidth
          InputLabelProps={{ required: false }}
          component={FormText}
          {...rest}
        />
      </Column>
    </Row>
  ));
}

export default FormFields;
