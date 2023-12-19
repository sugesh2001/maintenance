import React from 'react';
import { createRoot } from 'react-dom';
import App from './App.jsx';
import './index.css';
import { FrappeProvider } from 'frappe-react-sdk';
import ReactDOM from "react-dom/client";



ReactDOM.createRoot(document.getElementById('root')).render(
  <FrappeProvider socketPort={import.meta.env.VITE_SOCKET_PORT ?? ""}>
  <App />
</FrappeProvider>
)
