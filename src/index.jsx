import React from 'react';
import { createRoot } from 'react-dom/client'; // Импортируем createRoot
import App from './Components/App';
import './style.css'; // Подключаем стили из index.css

const root = createRoot(document.getElementById('root')); // Создаем корневой элемент

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
