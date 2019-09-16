// @flow

import React from 'react';
import { map, includes } from 'lodash';
import { Field } from 'redux-form';

import { FormText } from 'custom_modules/form';
import { Row, Column } from 'custom_modules/layout';
import { CENTER, NORMAL } from 'utils/constants/values';

import { fields } from '../helpers';

function FormFields({ error, t }: { error: Array<string>, t: Function }) {
  return map(fields, ({ key, label, ...rest }) => (
    <Row key={key} alignItems={CENTER} justify={CENTER}>
      <Column xs={8} sm={8} md={8} lg={8} xl={8}>
        <Field
          error={includes(error, rest.name)}
          margin={NORMAL}
          fullWidth
          InputLabelProps={{ required: false }}
          component={FormText}
          label={t(label)}
          {...rest}
        />
      </Column>
    </Row>
  ));
}

export default FormFields;
