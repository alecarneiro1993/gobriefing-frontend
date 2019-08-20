import React from "react";
import { shallow } from "enzyme";

import { GradientOverlay } from "custom_modules";
import PresentationSection from "./PresentationSection";

describe("PresentationSection", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<PresentationSection />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(GradientOverlay)).toHaveLength(1);
  });
});
