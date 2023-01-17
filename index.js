import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App';
import { Provider } from './src/context/titles';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    <Provider>
        <App />
    </Provider>
);
