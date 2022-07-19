import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from "./reducers";

import App from './App';
import './index.css';
import { ThemeProvider } from '@material-ui/core';
import { createTheme  } from '@material-ui/core/styles';

import "typeface-poppins";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
    ].join(','),
  },
})

const store = configureStore({ reducer: reducers })

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>
);