import React from 'react';
import TaskFilter from './TaskFilter';

const Footer = ({ activeTaskCounter }) => {
    return (
        <footer className="footer">
            <span className="todo-count">{activeTaskCounter} {activeTaskCounter === 1 ? "item" : "items"} left</span>
            <TaskFilter />
            <button className="clear-completed">Clear completed</button>
        </footer>
    );
};

export default Footer;
