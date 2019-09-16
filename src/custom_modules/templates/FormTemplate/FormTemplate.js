// @flow

import React from 'react';
import type { ChildrenArray, Element } from 'react';
import Hidden from '@material-ui/core/Hidden';

import { Page, Row, Column } from 'custom_modules/layout';
import { MobileLogoHeader } from 'custom_modules/elements';
import { ROW } from 'utils/constants/values';

type Props = {
  presentation: any,
  direction: string,
  children: ChildrenArray<Element<any>>
};

function FormTemplate(props: Props) {
  const { presentation: Presentation, children, direction = ROW } = props;
  return (
    <Page maxWidth={false}>
      <Row direction={direction}>
        <Hidden smDown>
          <Column md={7} lg={7} xl={8}>
            <Presentation />
          </Column>
        </Hidden>
        <Column xs sm md lg xl>
          <Hidden mdUp>
            <MobileLogoHeader />
          </Hidden>
          {children}
        </Column>
      </Row>
    </Page>
  );
}

export default FormTemplate;
