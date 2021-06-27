import React from 'react';
import { shallow } from 'enzyme';

import InitListeners from '.';

jest.mock('react-redux');

describe('components / InitListeners', () => {
  it('renders children when provided', () => {
    const wrapper = shallow(
      <InitListeners>
        <div id='id' />
      </InitListeners>
    );

    expect(wrapper.find('#id')).toHaveLength(1);
  });
});
