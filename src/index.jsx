import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './Components/App/App.jsx';

const root = createRoot(document.getElementById('root')); // Создаем корневой элемент

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
