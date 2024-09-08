import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PaginationNavComponent } from './pagination-nav';
import { PaginationNavComponentFactory } from './test-factory/pagination-nav-factory';

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
    expect(prevButton).toBeDisabled();
  });

  test('disables next button on last page', () => {
    const mockData = PaginationNavComponentFactory.build({
      initialCurrent: 5,
      length: 5,
      onPageChange: mockOnPageChange,
    });
    render(<PaginationNavComponent {...mockData} />);
    
    const nextButton = screen.getByLabelText('Go to next page');
    expect(nextButton).toBeDisabled();
  });

  test('calls onPageChange when a page number is clicked', () => {
    const mockData = PaginationNavComponentFactory.build({
      current: 3,
      totalPages: 5,
      onPageChange: mockOnPageChange,
    });
    render(<PaginationNavComponent {...mockData} />);
    
    fireEvent.click(screen.getByText('4'));
    expect(mockOnPageChange).toHaveBeenCalledWith(4);
  });

  test('calls onPageChange when next button is clicked', () => {
    const mockData = PaginationNavComponentFactory.build({
      current: 3,
      totalPages: 5,
      onPageChange: mockOnPageChange,
    });
    render(<PaginationNavComponent {...mockData} />);
    
    fireEvent.click(screen.getByLabelText('Go to next page'));
    expect(mockOnPageChange).toHaveBeenCalledWith(4);
  });

  test('calls onPageChange when previous button is clicked', () => {
    const mockData = PaginationNavComponentFactory.build({
      current: 3,
      totalPages: 5,
      onPageChange: mockOnPageChange,
    });
    render(<PaginationNavComponent {...mockData} />);
    
    fireEvent.click(screen.getByLabelText('Go to previous page'));
    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  test('renders ellipsis when there are many pages', () => {
    const mockData = PaginationNavComponentFactory.build({
      current: 50,
      totalPages: 100,
    });
    render(<PaginationNavComponent {...mockData} />);
    
    expect(screen.getAllByText('…')).toHaveLength(2);
  });

  test('applies correct aria labels', () => {
    const mockData = PaginationNavComponentFactory.build({
      current: 3,
      totalPages: 5,
    });
    render(<PaginationNavComponent {...mockData} />);
    
    expect(screen.getByLabelText('Page 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Page 2')).toBeInTheDocument();
    expect(screen.getByLabelText('Page 3, current page')).toBeInTheDocument();
    expect(screen.getByLabelText('Page 4')).toBeInTheDocument();
    expect(screen.getByLabelText('Page 5')).toBeInTheDocument();
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