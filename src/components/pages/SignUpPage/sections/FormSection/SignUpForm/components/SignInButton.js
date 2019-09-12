// @flow

import React from 'react';

import { Row, Column, OffsetColumn } from 'custom_modules/layout';
import Button from 'custom_modules/elements/Button';
import {
  PRIMARY,
  SUBMIT,
  CONTAINED,
  ROW_REVERSE
} from 'utils/constants/values';

function SignUpButton({ t }: { t: Function }) {
  return (
    <Row direction={ROW_REVERSE}>
      <OffsetColumn xs={2} sm={2} md={2} lg={2} xl={2} />
      <Column xs={4} sm={4} md={4} lg={4} xl={3}>
        <Button variant={CONTAINED} color={PRIMARY} type={SUBMIT} fullWidth>
          {t('pages.sign_up.submit')}
        </Button>
      </Column>
    </Row>
  );
}

export default SignUpButton;
