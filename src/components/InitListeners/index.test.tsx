import React from 'react';
import { render, screen } from '@testing-library/react';

import InitListeners from '.';

jest.mock('react-redux');

describe('components / InitListeners', () => {
  it('renders children when provided', () => {
    render(
      <InitListeners>
        <div data-testid='id' />
      </InitListeners>
    );

    expect(screen.getByTestId('id')).toBeTruthy();
  });
});
