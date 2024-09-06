import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { PaginationButton } from './pagination-button-component';

describe('PaginationButton Component', () => {
  test('renders with default props', () => {
    render(<PaginationButton value={1} />);
    const headingElement = screen.getByText('1');
    expect(headingElement).toBeInTheDocument();
  });

  test('renders with custom size', () => {
    render(<PaginationButton size='large' value={2} />);
    const headingElement = screen.getByText('2');
    expect(headingElement).toBeInTheDocument();
  });


  test('sets aria-label attribute when provided', () => {
    render(
      <PaginationButton value={2} ariaLabel='Page two' />,
    );
    const headingElement = screen.getByText('2');
    expect(headingElement).toHaveAttribute('aria-label', 'Page two');
  });

  test('uses title as aria-label when ariaLabel is not provided', () => {
    render(<PaginationButton value={4} />);
    const headingElement = screen.getByText('4');
    expect(headingElement).toHaveAttribute('aria-label', '4');
  });
});
