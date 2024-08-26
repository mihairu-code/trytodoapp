import React from 'react';
import TaskFilter from './TaskFilter';
import ExtraComponent from "./ExtraComponent";

const Footer = ({ activeTaskCounter, filter, onFilterChange, delCompleted, allSelected, selectAllToggle }) => {
    return (
        <footer className="footer">
            <span className="todo-count">{activeTaskCounter} {activeTaskCounter === 1 ? "item" : "items"} left</span>
            <TaskFilter filter={filter} onFilterChange={onFilterChange} />
            <button className="clear-completed" onClick={delCompleted}>
                Clear completed
            </button>
            <ExtraComponent allSelected={allSelected} selectAllToggle={selectAllToggle} />
        </footer>
    );
};

export default Footer;
