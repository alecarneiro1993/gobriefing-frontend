import React from "react";
import { shallow } from "enzyme";

import { ImageBackground } from ".";

describe("ImageBackground", () => {
  it("renders without crashing", () => {
    const src =
      "https://dslv9ilpbe7p1.cloudfront.net/hownJrwXlTVdURCWN3Sj1g_store_header_image";
    const wrapper = shallow(<ImageBackground src={src} />);
    expect(wrapper).toMatchSnapshot();
  });
});
