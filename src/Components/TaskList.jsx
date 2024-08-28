import React from 'react';
import Task from './Task';
import PropTypes from 'prop-types';

const TaskList = ({ tasks = [], onToggle, onDelete, onEdit }) => {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggle={() => onToggle(task.id)}
          onDelete={() => onDelete(task.id)}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TaskList;
