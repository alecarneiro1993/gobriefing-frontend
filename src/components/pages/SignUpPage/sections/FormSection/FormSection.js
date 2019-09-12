import React from 'react';
import { useTranslation } from 'react-i18next';

import { Container, Row, Column, RobotoTypography } from 'custom_modules';
import { CENTER, FULL, PRIMARY, OVERLINE } from 'utils/constants';

import SignUpForm from './SignUpForm';

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
            {t('pages.sign_up.heading')}
          </RobotoTypography>
        </Column>
      </Row>
      <Row>
        <Column xs>
          <SignUpForm />
        </Column>
      </Row>
    </Container>
  );
}

export default FormSection;
