import React from 'react';
import { shallow } from 'enzyme';

import PageHeading from '.';

describe('PageHeading', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<PageHeading>Heading Test</PageHeading>);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.text()).toEqual('Heading Test');
  });
});
