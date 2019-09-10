import React from "react";
import { Form, Field, reduxForm } from "redux-form";
import { map } from "lodash";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";

import { Container, Row, Column, OffsetColumn } from "custom_modules/layout";
import { Icon, Button, RobotoTypography } from "custom_modules/elements";
import { FormText } from "custom_modules/form";
import {
  CENTER,
  PRIMARY,
  NORMAL,
  ROW_REVERSE,
  SECONDARY,
  RIGHT,
  HALF,
  SUBMIT,
  CONTAINED,
  OUTLINED
} from "utils/constants/values";
import { SIGN_UP_PATH, PASSWORD_RECOVERY_PATH } from "utils/constants/routes";

import { fields } from "./helpers";

class SignInForm extends React.Component {
  onSubmit(e) {}

  render() {
    const { t } = this.props;
    return (
      <Form onSubmit={this.onSubmit} noValidate>
        <Container height={`${HALF}%`}>
          {map(fields, ({ key, icon, ...rest }) => {
            return (
              <Row key={key} alignItems={CENTER} justify={CENTER}>
                <Column align={CENTER} xs={2} sm={1} md={2} lg={2} xl={2}>
                  <Icon size="2.2rem" color={PRIMARY} marginTop={0.5}>
                    {icon}
                  </Icon>
                </Column>
                <Column xs={8} sm={7} md={8} lg={8} xl={8}>
                  <Field
                    margin={NORMAL}
                    fullWidth
                    InputLabelProps={{ required: false }}
                    {...rest}
                    variant={OUTLINED}
                    component={FormText}
                  />
                </Column>
              </Row>
            );
          })}
          <Row direction={ROW_REVERSE}>
            <OffsetColumn xs={1} sm={2} md={1} lg={1} xl={1} />
            <Column xs={6} sm={6} md={6} lg={6} xl={6} align={RIGHT}>
              <RobotoTypography
                component={Link}
                to={PASSWORD_RECOVERY_PATH}
                color={PRIMARY}
              >
                {t("pages.sign_in.forgot_password")}
              </RobotoTypography>
            </Column>
          </Row>
          <Row direction={ROW_REVERSE}>
            <OffsetColumn xs={1} sm={2} md={1} lg={1} xl={1} />
            <Column xs={4} sm={4} md={4} lg={4} xl={3}>
              <Button
                variant="contained"
                color={SECONDARY}
                component={Link}
                to={SIGN_UP_PATH}
                fullWidth
              >
                {t("pages.sign_in.sign_up")}
              </Button>
            </Column>
          </Row>
          <Row direction={ROW_REVERSE}>
            <OffsetColumn xs={1} sm={2} md={1} lg={1} xl={1} />
            <Column xs={4} sm={4} md={4} lg={4} xl={3}>
              <Button
                type={SUBMIT}
                variant={CONTAINED}
                color={PRIMARY}
                fullWidth
              >
                {t("pages.sign_in.submit")}
              </Button>
            </Column>
          </Row>
        </Container>
      </Form>
    );
  }
}

export default withTranslation()(
  reduxForm({
    form: "SignInForm"
  })(SignInForm)
);
