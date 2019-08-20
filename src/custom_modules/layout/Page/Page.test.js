import React from "react";
import { shallow } from "enzyme";

import Page from "./Page";

describe("PageContainer - the main container for pages", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Page />);
    expect(wrapper).toMatchSnapshot();
  });
});
