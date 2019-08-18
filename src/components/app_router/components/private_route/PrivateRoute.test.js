import React from "react";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router";
import { Route } from "react-router-dom";

import { ROOT_PATH, HOME_PATH, SIGN_IN_PATH } from "utils/constants/routes";
import { ROOT_PAGE, HOME_PAGE } from "utils/constants/pages";

import { PrivateRoute } from ".";

describe("PrivateRoute component", () => {
  const Page = page =>
    function PageComponent() {
      return <div>{page}</div>;
    };

  it("renders without crashing", () => {
    const props = {
      path: ROOT_PATH,
      component: Page(ROOT_PAGE),
      exact: true,
      isAuthenticated: false
    };
    const wrapper = shallow(<PrivateRoute {...props} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Route)).toHaveLength(1);
  });

  it("redirects to sign in page when the user isn't authenticated", () => {
    const props = {
      path: HOME_PATH,
      component: Page(HOME_PAGE),
      exact: true,
      isAuthenticated: false
    };
    const wrapper = mount(
      <MemoryRouter initialEntries={["/home"]}>
        <PrivateRoute {...props} />
      </MemoryRouter>
    );
    expect(wrapper.find("Router").props().history.location.pathname).toEqual(
      SIGN_IN_PATH
    );
  });
});
