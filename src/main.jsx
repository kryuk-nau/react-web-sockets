import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Створюємо WebSocket-з'єднання
const ws = new WebSocket('wss://boiling-beach-26008.herokuapp.com'); //[cite: 1]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App ws={ws} />
  </StrictMode>,
);
