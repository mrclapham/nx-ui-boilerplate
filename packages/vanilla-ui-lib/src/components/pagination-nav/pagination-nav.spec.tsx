import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PaginationNavComponent } from './pagination-nav';
import { PaginationNavComponentFactory } from './test-factory/pagination-nav-factory';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

library.add(fas);

describe('PaginationNavComponent', () => {
  const mockOnPageChange = jest.fn();

  beforeEach(() => {
    mockOnPageChange.mockClear();
  });

  test('renders with default props', () => {
    const mockData = PaginationNavComponentFactory.build();
    render(<PaginationNavComponent {...mockData} />);
    const element = screen.getByTestId('pagination-nav-component');
    expect(element).toBeInTheDocument();
  });

  test('displays correct page numbers', () => {
    const mockData = PaginationNavComponentFactory.build({
      initialCurrent: 3,
      length: 10,
    });
    render(<PaginationNavComponent {...mockData} />);
    
    expect(screen.getByText('3')).toHaveAttribute('aria-current', 'page');
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('disables previous button on first page', () => {
    const mockData = PaginationNavComponentFactory.build({
      initialCurrent: 1,
      length: 5,
    });
    render(<PaginationNavComponent {...mockData} />);
    
    const prevButton = screen.getByLabelText('Go to previous page');
    expect(prevButton).toBeInTheDocument();
    expect(prevButton).toBeDisabled();
  });


  test('calls onPageChange when a page number is clicked', () => {
    const mockData = PaginationNavComponentFactory.build({
      initialCurrent: 3,
      length: 5,
      onPageChange: mockOnPageChange,
    });
    render(<PaginationNavComponent {...mockData} />);
    act(() => { 
      fireEvent.click(screen.getByText('4'));
    });
    
    expect(mockOnPageChange).toHaveBeenCalledWith(4);
  });

  test('calls onPageChange when next button is clicked', () => {
    const mockFn = jest.fn();
    const mockData = PaginationNavComponentFactory.build({
      initialMin: 1,
      initialCurrent: 3,
      length: 5,
      onPageChange: mockFn,
    });
    render(<PaginationNavComponent {...mockData} />);
    const nextButton = screen.getByLabelText('Go to next page');
    act(() => { 
      nextButton.click();
        //fireEvent.click(screen.getByLabelText('Go to next page'));
    });
    expect(mockFn).toHaveBeenCalledWith(4);
  });

  test('calls onPageChange when previous button is clicked', () => {
    const mockData = PaginationNavComponentFactory.build({
      initialCurrent: 3,
      length: 5,
      onPageChange: mockOnPageChange,
    });
    render(<PaginationNavComponent {...mockData} />);
    act(() => { 
          fireEvent.click(screen.getByLabelText('Go to previous page'));
    });
    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });


  test('renders correct number of page buttons', () => {
    const mockData = PaginationNavComponentFactory.build({
      initialCurrent: 1,
      length: 3,
    });
    render(<PaginationNavComponent {...mockData} />);
    
    const pageButtons = screen.getAllByRole('button');
    // 3 page buttons + 2 navigation buttons
    expect(pageButtons).toHaveLength(5);
  });
});