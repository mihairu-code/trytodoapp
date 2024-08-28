import React from 'react';
import TaskFilter from './TaskFilter';
import ExtraComponent from './ExtraComponent';
import PropTypes from 'prop-types';

const Footer = ({
  activeTaskCounter = 0,
  filter,
  onFilterChange,
  delCompleted,
  allSelected = false,
  selectAllToggle,
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        {activeTaskCounter} {activeTaskCounter === 1 ? 'item' : 'items'} left
      </span>
      <TaskFilter filter={filter} onFilterChange={onFilterChange} />
      <button className="clear-completed" onClick={delCompleted}>
        Clear completed
      </button>
      <ExtraComponent allSelected={allSelected} selectAllToggle={selectAllToggle} />
    </footer>
  );
};

Footer.propTypes = {
  activeTaskCounter: PropTypes.number.isRequired,
  delCompleted: PropTypes.func.isRequired,
  allSelected: PropTypes.bool.isRequired,
  selectAllToggle: PropTypes.func.isRequired,
};

export default Footer;
