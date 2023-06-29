import React from 'react';
import ReactDOM from 'react-dom';
import { MantineProvider } from '@mantine/core';

import App from './App';
import SettingsProvider from './Context/Settings';
import { AuthProvider } from './Context/Auth';

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <SettingsProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </SettingsProvider>
    </MantineProvider>
  </React.StrictMode>,
  root
);
