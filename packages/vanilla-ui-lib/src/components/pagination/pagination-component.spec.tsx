import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PaginationComponent } from './pagination-component';
import { Sizes } from '../component-enums/sizes';
import styles from './pagination-component.module.css';

describe('PaginationComponent Component', () => {

  test('renders with props', () => {
    render(<PaginationComponent min={1} max={100} current={1} length={10} />);
    const paginationElement = screen.getByRole('navigation');
    expect(paginationElement).toBeInTheDocument();
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(10);
  });

  test('handles onChange event', () => {
    const onChange = jest.fn();
    render(<PaginationComponent min={1} max={100} current={1} length={10} onChange={onChange} />);
    const buttons = screen.getAllByRole('button');
    act(() => {
      buttons[1].click();
    });
    expect(onChange).toHaveBeenCalledWith(2);
  }
  );

  test('increments and decrements the selected item', () => {
    render(<PaginationComponent min={1} max={100} current={1} length={10} />);
    const buttons = screen.getAllByRole('button');
    act(() => {
      buttons[1].click();
    });
    expect(buttons[1]).toHaveTextContent('2');
    act(() => {
      buttons[0].click();
    });
    expect(buttons[0]).toHaveTextContent('1');
  }
  );

  test('renders with custom size', () => {
    render(<PaginationComponent size={Sizes.LARGE} min={1} max={100} current={1} length={10} />);
    const button = screen.getAllByRole('button');
    const firstButton = button[0];
    const lastButton = button[button.length - 1];
    expect(firstButton).toHaveClass(styles['pagination-button']);
    expect(firstButton).toHaveClass(styles['pagination-button--large']);
    expect(firstButton).toHaveClass(styles['pagination-button--selected']);

    expect(lastButton).toHaveClass(styles['pagination-button']);
    expect(lastButton).toHaveClass(styles['pagination-button--large']);
    expect(lastButton).not.toHaveClass(styles['pagination-button--selected']);


  }
  );
  test('uses ariaLabel as aria-label when provided', () => {
    render(<PaginationComponent max={100} min={10} current={12} length={10} ariaLabel="pagination" />);
    const paginationElement = screen.getByRole('navigation', { name: 'pagination' });
    expect(paginationElement).toHaveAttribute('aria-label', 'pagination');
  });

});
