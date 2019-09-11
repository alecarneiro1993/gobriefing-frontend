import React from 'react';
import Hidden from '@material-ui/core/Hidden';

import { Page, Row, Column } from 'custom_modules/layout';
import { MobileLogoHeader } from 'custom_modules/elements';

import { PresentationSection, FormSection } from './sections';

class SignInPage extends React.Component {
  render() {
    return (
      <Page maxWidth={false}>
        <Row>
          <Hidden smDown>
            <Column md={7} lg={7} xl={8}>
              <PresentationSection />
            </Column>
          </Hidden>
          <Column xs sm md lg xl>
            <Hidden mdUp>
              <MobileLogoHeader />
            </Hidden>
            <FormSection />
          </Column>
        </Row>
      </Page>
    );
  }
}

export default SignInPage;
