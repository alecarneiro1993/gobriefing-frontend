import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Column, OffsetColumn } from 'custom_modules/layout';
import Button from 'custom_modules/elements/Button';
import { SECONDARY, ROW_REVERSE } from 'utils/constants/values';
import { SIGN_UP_PATH } from 'utils/constants/routes';

function SignUpButton({ t }) {
  return (
    <Row direction={ROW_REVERSE}>
      <OffsetColumn xs={2} sm={2} md={2} lg={2} xl={2} />
      <Column xs={4} sm={4} md={4} lg={4} xl={3}>
        <Button
          variant="contained"
          color={SECONDARY}
          component={Link}
          to={SIGN_UP_PATH}
          fullWidth
        >
          {t('pages.sign_in.sign_up')}
        </Button>
      </Column>
    </Row>
  );
}

export default SignUpButton;
