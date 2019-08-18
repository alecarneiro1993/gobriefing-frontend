import React from "react";
import { shallow } from "enzyme";

import { Container } from ".";

describe("Container", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Container>Test</Container>);
    expect(wrapper).toMatchSnapshot();
  });
});
