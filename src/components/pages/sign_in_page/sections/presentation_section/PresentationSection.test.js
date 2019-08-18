import React from "react";
import { shallow } from "enzyme";

import { ImageBackground } from "custom_modules";
import { PresentationSection } from ".";

describe("PresentationSection", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<PresentationSection />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(ImageBackground)).toHaveLength(1);
  });
});
