import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewTaskForm = ({ onAddTask = onAddTask(undefined) }) => {
  const [task, setTask] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder={isFocused ? '' : 'What needs to be done?'}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
    </form>
  );
};

NewTaskForm.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default NewTaskForm;
