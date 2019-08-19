import React from "react";
import { Field, reduxForm } from "redux-form";
import { TextField, Button } from "@material-ui/core";
import { map } from "lodash";
import { withTranslation } from "react-i18next";

import { Container, Row, Column, Icon } from "custom_modules";
import { CENTER, PRIMARY, NORMAL, FLEX_END } from "utils";

import { fields } from "./helpers";

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { t } = this.props;
    return (
      <Container height="50%">
        {map(fields, ({ key, icon, ...rest }) => {
          return (
            <Row key={key} alignItems={CENTER} justify={CENTER}>
              <Column align={CENTER} xs={2} sm={1} md={2} lg={2} xl={2}>
                <Icon size="2.2rem" color={PRIMARY} marginTop={10}>
                  {icon}
                </Icon>
              </Column>
              <Column xs={8} sm={7} md={8} lg={8} xl={8}>
                <TextField margin={NORMAL} fullWidth {...rest} />
              </Column>
            </Row>
          );
        })}
        <Row direction="row-reverse">
          <Column xs={1} sm={2} md={1} lg={1} xl={1} />
          <Column xs={4} sm={4} md={4} lg={4} xl={3}>
            <Button variant="contained" color={PRIMARY} fullWidth>
              {t("pages.sign_in.submit")}
            </Button>
          </Column>
        </Row>
      </Container>
    );
  }
}

export default withTranslation()(SignInForm);
