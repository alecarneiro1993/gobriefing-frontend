import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  Container, Row, Column, RobotoTypography,
} from 'custom_modules';
import {
  CENTER, FULL, PRIMARY, OVERLINE,
} from 'utils/constants';

import SignInForm from './SignInForm';

function FormSection() {
  const { t } = useTranslation();
  return (
    <Container height={`${FULL}%`} alignContent={CENTER}>
      <Row justify={CENTER}>
        <Column xs={4} align={CENTER}>
          <RobotoTypography
            gutterBottom
            component="h1"
            variant={OVERLINE}
            size={1.2}
            color={PRIMARY}
          >
            {t('pages.sign_in.heading')}
          </RobotoTypography>
        </Column>
      </Row>
      <Row>
        <Column xs>
          <SignInForm />
        </Column>
      </Row>
    </Container>
  );
}

export default FormSection;
