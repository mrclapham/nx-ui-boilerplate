import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ButtonComponent } from './button-component';
import { act } from 'react';

describe('genericComponent Component', () => {
  test('Calls onClick', () => {
    const onClick = jest.fn();
    render(<ButtonComponent onClick={onClick}/>);
    const btt = screen.getByRole('button');
    expect(btt).toBeInTheDocument();
    act(() => {
      btt.click();
    });
    expect(onClick).toHaveBeenCalled();
  });

});
