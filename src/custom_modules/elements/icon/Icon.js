import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon as MUIIcon } from '@material-ui/core';

function IconWrapper({ marginTop, ...rest }) {
  return <MUIIcon style={{ marginTop: `${marginTop}rem` }} {...rest} />;
}

const Icon = styled(IconWrapper)`
  font-size: ${({ size }) => size || 'small'};
`;

IconWrapper.propTypes = {
  marginTop: PropTypes.number,
};

IconWrapper.defaultProps = {
  marginTop: '',
};
export default Icon;
