import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const ws = ''; // Your implementation

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App ws={ws}/>
  </StrictMode>,
);
