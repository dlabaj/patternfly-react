import React from 'react';
import { Spinner } from '@patternfly/react-core';

class SimpleSpinner extends React.Component {
  render() {
    return <Spinner loading={true} />;
  }

}

export default SimpleSpinner;
