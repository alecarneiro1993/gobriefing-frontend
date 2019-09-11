import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Column, OffsetColumn } from 'custom_modules/layout';
import RobotoTypography from 'custom_modules/elements/RobotoTypography';
import { PRIMARY, ROW_REVERSE, RIGHT } from 'utils/constants/values';
import { PASSWORD_RECOVERY_PATH } from 'utils/constants/routes';

function PasswordRecovery({ t }) {
  return (
    <Row direction={ROW_REVERSE}>
      <OffsetColumn xs={2} sm={2} md={2} lg={2} xl={2} />
      <Column xs={6} sm={6} md={6} lg={6} xl={6} align={RIGHT}>
        <RobotoTypography
          component={Link}
          to={PASSWORD_RECOVERY_PATH}
          color={PRIMARY}
        >
          {t('pages.sign_in.forgot_password')}
        </RobotoTypography>
      </Column>
    </Row>
  );
}

export default PasswordRecovery;
