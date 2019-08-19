import React from "react";
import { shallow } from "enzyme";

import OffsetColumn from ".";

describe("OffsetColumn", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<OffsetColumn />);
    expect(wrapper).toMatchSnapshot();
  });
});
