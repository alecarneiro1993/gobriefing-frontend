import React from "react";
import { shallow } from "enzyme";

import { PageContainer } from ".";

describe("PageContainer - the main container for pages", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<PageContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
