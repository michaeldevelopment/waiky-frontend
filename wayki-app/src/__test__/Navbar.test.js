import React from 'react';
import { mount } from 'enzyme';
import AppNavBar from '../Components/AppNavBar';

describe('AppNavBar', () => {
  const navbar = mount(<AppNavBar />);

  test('test button', () => {
    const text = navbar.find('Button').text();
    expect(text).toEqual('Login');
  });
});
