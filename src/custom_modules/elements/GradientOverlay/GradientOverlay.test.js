import React from 'react';
import { shallow } from 'enzyme';

import GradientOverlay from '.';

describe('GradientOverlay', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<GradientOverlay />);
    expect(wrapper).toMatchSnapshot();
  });
});
