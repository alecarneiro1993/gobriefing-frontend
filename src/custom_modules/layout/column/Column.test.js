import React from "react";
import { shallow } from "enzyme";

import Column from ".";

describe("Column", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Column>Content</Column>);
    expect(wrapper).toMatchSnapshot();
  });
});
