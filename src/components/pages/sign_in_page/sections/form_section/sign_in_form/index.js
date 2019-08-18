import React from "react";
import { Field, reduxForm } from "redux-form";
import { TextField, Button } from "@material-ui/core";
import { map } from "lodash";
import { withTranslation } from "react-i18next";

import { Container, Row, Column, Icon } from "custom_modules";
import { CENTER } from "utils/constants";

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
            <Row key={key}>
              <Column
                xs={2}
                alignItems={CENTER}
                style={{
                  display: "inline-flex",
                  verticalAlign: "middle"
                }}
              >
                <Icon size="2rem" align={CENTER} color="primary">
                  {icon}
                </Icon>
              </Column>
              <Column xs={10}>
                <TextField margin="normal" fullWidth {...rest} />
              </Column>
            </Row>
          );
        })}
        <Row justify="flex-end">
          <Column xs={4}>
            <Button variant="contained" color="primary" fullWidth>
              {t("pages.sign_in.submit")}
            </Button>
          </Column>
        </Row>
      </Container>
    );
  }
}

export default withTranslation()(SignInForm);
