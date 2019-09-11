import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import { SAIRA_FONT, INHERIT } from 'utils/constants';

function SairaTypographyWrapper({ customColor, ...rest }) {
  return <Typography {...rest} />;
}
const SairaTypography = styled(SairaTypographyWrapper)`
  font-family: ${SAIRA_FONT};
  color: ${({ customColor }) => customColor || ''};
`;

SairaTypographyWrapper.propTypes = {
  customColor: PropTypes.string,
};

SairaTypographyWrapper.defaultProps = {
  customColor: INHERIT,
};

export default SairaTypography;
