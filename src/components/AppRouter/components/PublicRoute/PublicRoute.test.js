import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { Route } from 'react-router-dom';

import { ROOT_PATH, SIGN_IN_PATH, HOME_PATH } from 'utils/constants/routes';
import { ROOT_PAGE, SIGN_IN_PAGE } from 'utils/constants/pages';

import PublicRoute from './PublicRoute';

describe('PublicRoute component', () => {
  const Page = (page) => function PageComponent() {
    return <div>{page}</div>;
  };

  it('renders without crashing', () => {
    const props = {
      path: ROOT_PATH,
      component: Page(ROOT_PAGE),
      exact: true,
      isAuthenticated: false,
      isRestricted: false,
    };
    const wrapper = shallow(<PublicRoute {...props} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Route)).toHaveLength(1);
  });

  describe('when its not restricted', () => {
    it('renders the desired component', () => {
      const props = {
        path: ROOT_PATH,
        component: Page(ROOT_PAGE),
        exact: true,
        isAuthenticated: false,
        isRestricted: false,
      };
      const wrapper = mount(
        <MemoryRouter initialEntries={['/']}>
          <PublicRoute {...props} />
        </MemoryRouter>,
      );
      expect(wrapper.find('Router').props().history.location.pathname).toEqual(
        ROOT_PATH,
      );
    });
  });

  describe('when its restricted', () => {
    it('redirects to the home authenticated page', () => {
      const props = {
        path: SIGN_IN_PATH,
        component: Page(SIGN_IN_PAGE),
        exact: true,
        isAuthenticated: true,
        isRestricted: true,
      };
      const wrapper = mount(
        <MemoryRouter initialEntries={['/sign_in']}>
          <PublicRoute {...props} />
        </MemoryRouter>,
      );
      expect(wrapper.find('Router').props().history.location.pathname).toEqual(
        HOME_PATH,
      );
    });
  });
});
