import { render } from '@testing-library/react';

import VanillaUiLib from './vanilla-ui-lib';

describe('VanillaUiLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VanillaUiLib />);
    expect(baseElement).toBeTruthy();
  });
});
