import React from 'react';
import { render } from '@testing-library/react';
import { SettingsProvider } from './index';

test('SettingsProvider renders children', () => {
  const TestComponent = () => <div>Test Component</div>;

  const { getByText } = render(
    <SettingsProvider>
      <TestComponent />
    </SettingsProvider>
  );

  expect(getByText('Test Component')).toBeInTheDocument();
});
