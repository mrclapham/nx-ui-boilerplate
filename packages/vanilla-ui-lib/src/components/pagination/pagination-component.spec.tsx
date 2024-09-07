import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PaginationComponent } from './pagination-component';

describe('PaginationComponent Component', () => {
  // test('renders with default props', () => {
  //   render(<PaginationComponent title='Default Heading' />);
  //   const headingElement = screen.getByText('Default Heading');
  //   expect(headingElement).toBeInTheDocument();
  //   expect(headingElement).toHaveClass('text-3xl');
  // });

  // test('renders with custom size', () => {
  //   render(<PaginationComponent size='large' title='Large Heading' />);
  //   const headingElement = screen.getByText('Large Heading');
  //   expect(headingElement).toHaveClass('text-3xl');
  // });

  // test('applies custom className', () => {
  //   render(<PaginationComponent title='Custom Class' className='custom-class' />);
  //   const headingElement = screen.getByText('Custom Class');
  //   expect(headingElement).toHaveClass('custom-class');
  // });

  // test('sets aria-label attribute when provided', () => {
  //   render(
  //     <PaginationComponent title='Aria Label Test' ariaLabel='Custom Label' />,
  //   );
  //   const headingElement = screen.getByText('Aria Label Test');
  //   expect(headingElement).toHaveAttribute('aria-label', 'Custom Label');
  // });

  test('uses ariaLabel as aria-label when provided', () => {
    render(<PaginationComponent max={100} min={10} current={12} length={10} ariaLabel="pagination" />);

    const paginationElement = screen.getByRole('navigation', { name: 'pagination' });
    expect(paginationElement).toHaveAttribute('aria-label', 'pagination');
  });

});
