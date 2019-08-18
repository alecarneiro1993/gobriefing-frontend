import React from "react";
import { shallow } from "enzyme";

import { Row } from ".";
import { Column } from "../column";

describe("Row", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(
      <Row>
        <Column>Test</Column>
      </Row>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
