import React from 'react'
import ReactDOM from 'react-dom/client'

import { GlobalStyle } from './Themes/global';

import { ThemeProvider } from 'styled-components';
import theme from './Themes/theme';

import { Routes } from './routes';
import { AuthProvider } from './hooks/auth';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
