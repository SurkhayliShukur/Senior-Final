import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client';
import { App } from './layouts';
import { ThemeContextProvider } from './Context'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from "./features/persist/reduxConfig"


import './assets/sass/index.scss'
import "bootstrap-icons/font/bootstrap-icons.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ThemeContextProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </ThemeContextProvider>
);