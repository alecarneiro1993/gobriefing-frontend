import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

function Block({ children }) {
  return <Box>{children}</Box>;
}

export default Block;

Block.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Block.defaultProps = {
  children: [],
};
