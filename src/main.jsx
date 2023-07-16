import React from 'react'
import ReactDOM from 'react-dom/client'

import { GlobalStyle } from './Themes/global';

import { ThemeProvider } from 'styled-components';
import theme from './Themes/theme';

import { Routes } from './routes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
);
