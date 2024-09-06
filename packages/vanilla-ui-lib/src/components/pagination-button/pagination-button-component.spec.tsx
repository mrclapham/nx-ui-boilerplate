import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { PaginationButton } from './pagination-button-component';

describe('PaginationButton Component', () => {
  test('renders with default props', () => {
    render(<PaginationButton value={1} />);
    const headingElement = screen.getByText('Default Heading');
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveClass('text-3xl');
  });

  test('renders with custom size', () => {
    render(<PaginationButton size='large' value={2} />);
    const headingElement = screen.getByText('Large Heading');
    expect(headingElement).toHaveClass('text-3xl');
  });

  test('applies custom className', () => {
    render(<PaginationButton value={3} />);
    const headingElement = screen.getByText('Custom Class');
    expect(headingElement).toHaveClass('custom-class');
  });

  test('sets aria-label attribute when provided', () => {
    render(
      <PaginationButton value={2} ariaLabel='Page two' />,
    );
    const headingElement = screen.getByText('Page two');
    expect(headingElement).toHaveAttribute('aria-label', 'Custom Label');
  });

  test('uses title as aria-label when ariaLabel is not provided', () => {
    render(<PaginationButton value={4} />);
    const headingElement = screen.getByText('Default Aria Label');
    expect(headingElement).toHaveAttribute('aria-label', 'Default Aria Label');
  });
});
