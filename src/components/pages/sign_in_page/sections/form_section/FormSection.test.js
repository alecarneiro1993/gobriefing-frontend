import React from "react";
import { shallow } from "enzyme";

import FormSection from ".";

describe("FormSection", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<FormSection />);
    expect(wrapper).toMatchSnapshot();
  });
});
