import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { createGlobalStyle } from 'styled-components';
import Collections from './HomeComponents/js/Collections';
import LookDetail from './HomeComponents/js/LookDetail';
import StylistList from './HomeComponents/js/StylistList';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #0A0A0A;
    color: #FFFFFF;
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0A0A0A',
      paper: '#1A1A1A',
    },
    primary: {
      main: '#FFFFFF',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Collections />} />
          <Route path="/look/:id" element={<LookDetail />} />
          <Route path="/stylists" element={<StylistList />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App; 