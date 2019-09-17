// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Column, OffsetColumn } from 'custom_modules/layout';
import Button from 'custom_modules/elements/Button';
import { LIGHT_PINK, ROW_REVERSE, CONTAINED } from 'utils/constants/values';
import { SIGN_IN_PATH } from 'utils/constants/routes';

function SignUpButton({ t }: { t: Function }) {
  return (
    <Row direction={ROW_REVERSE}>
      <OffsetColumn xs={2} sm={2} md={2} lg={2} xl={2} />
      <Column xs={4} sm={4} md={4} lg={4} xl={3}>
        <Button
          variant={CONTAINED}
          color={LIGHT_PINK}
          component={Link}
          to={SIGN_IN_PATH}
          fullWidth
        >
          {t('pages.sign_up.sign_in')}
        </Button>
      </Column>
    </Row>
  );
}

export default SignUpButton;
