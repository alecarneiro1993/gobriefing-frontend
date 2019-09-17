import React from 'react';
import Box from '@material-ui/core/Box';
import { isEmpty } from 'lodash';

import { Toast } from '../alerts';

const withToast = WrappedComponent =>
  class extends React.Component {
    state = { toast: {} };

    handleToast = toast => {
      this.setState({ toast });
    };

    render() {
      const {
        toast: { type, message }
      } = this.state;
      return (
        <Box>
          <WrappedComponent {...this.props} handleToast={this.handleToast} />
          <Toast
            open={!isEmpty(message)}
            onClose={() => this.setState({ toast: {} })}
            message={message}
            variant={type}
          />
        </Box>
      );
    }
  };

export default withToast;
