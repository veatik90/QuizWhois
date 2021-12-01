import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { theme } from './theme';
import { ErrorToastProvider } from './contexts/ErrorToastContext';
import { user } from './shared/constants';
import { AuthContext } from './shared/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ErrorToastProvider>
        <AuthContext.Provider value={user}>
          <App />
        </AuthContext.Provider>
      </ErrorToastProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
