import React from 'react';
import { shallow } from 'enzyme';

import OffsetColumn from './OffsetColumn';

describe('OffsetColumn', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<OffsetColumn />);
    expect(wrapper).toMatchSnapshot();
  });
});
