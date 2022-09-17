import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './App';

const elementRoot = document.getElementById('root') as HTMLElement;

ReactDOMClient.createRoot(elementRoot).render(<App />);
