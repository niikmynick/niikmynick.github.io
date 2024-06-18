import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { I18nextProvider } from 'react-i18next';
import i18n from "./utils/i18n";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <I18nextProvider i18n={i18n}>
        <App />
    </I18nextProvider>
);

reportWebVitals();