import React from "react";
import { shallow } from "enzyme";

import { PresentationSection } from ".";

describe("PresentationSection", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<PresentationSection />);
    expect(wrapper).toMatchSnapshot();
  });
});
