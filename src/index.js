import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client';
import { App } from './layouts';

import './assets/sass/index.scss'
import "bootstrap-icons/font/bootstrap-icons.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);