import { render } from '@testing-library/react';

import VanillaUiVanillaUi from './vanilla-ui-vanilla-ui';

describe('VanillaUiVanillaUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VanillaUiVanillaUi />);
    expect(baseElement).toBeTruthy();
  });
});
