import React from 'react';
import TasksFilter from './TaskFilter.jsx';

const Footer = ({ tasksLeft, clearCompleted }) => (
    <footer className="footer">
        <span className="todo-count">{tasksLeft} items left</span>
        <TasksFilter />
        <button className="clear-completed" onClick={clearCompleted}>
            Clear completed
        </button>
    </footer>
);

export default Footer;