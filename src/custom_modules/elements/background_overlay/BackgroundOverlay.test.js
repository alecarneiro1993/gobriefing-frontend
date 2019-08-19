import React from "react";
import { shallow } from "enzyme";

import BackgroundOverlay from ".";

describe("ImageBackground", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<BackgroundOverlay />);
    expect(wrapper).toMatchSnapshot();
  });
});
