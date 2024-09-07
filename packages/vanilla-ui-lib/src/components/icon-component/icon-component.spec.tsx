import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { IconComponent } from './icon-component';

describe('IconComponent Component', () => {
  test('renders with default props', () => {
    render(<IconComponent />);
    const element = screen.getByTestId('icon-component');
    expect(element).toBeInTheDocument();
  });

});
