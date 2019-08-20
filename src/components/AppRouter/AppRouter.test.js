import React from "react";
import { shallow } from "enzyme";

import AppRouter from "./AppRouter";

describe("AppRouter - the routing container component", () => {
  it("renders without crashing", () => {
    const component = shallow(<AppRouter />);
    expect(component).toMatchSnapshot();
  });
});
