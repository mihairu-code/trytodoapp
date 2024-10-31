import PropTypes from 'prop-types';

import Task from '../Task/Task.jsx';
import './TaskList.css';

export default function TaskList({ todos, filterData, onDeleted, onCheckboxClick, onPlayTimer, onPauseTimer, onEditTask, onSaveTask }) {
  let tasks;

  const taskTemplate = () => {
    tasks = todos.map((el) => {
      const { id, ...itemProps } = el;
      return (
        <Task
          key={id}
          {...itemProps}
          onEditTask={() => onEditTask(id)} // Передаем onEditTask
          onSaveTask={(newLabel) => onSaveTask(id, newLabel)}
          onCheckboxClick={() => onCheckboxClick(id)}
          onDeleted={() => onDeleted(id)}
          onPlayTimer={() => onPlayTimer(id)}
          onPauseTimer={() => onPauseTimer(id)}
        />
      );
    });
  };

  if (filterData === 'all') {
    taskTemplate();
  } else if (filterData === 'active') {
    todos = todos.filter((el) => !el.completed);
    taskTemplate();
  } else if (filterData === 'completed') {
    todos = todos.filter((el) => el.completed);
    taskTemplate();
  }

  return <ul className="todo-list">{tasks}</ul>;
}

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  filterData: PropTypes.oneOf(['all', 'active', 'completed']),
  onDeleted: PropTypes.func,
  onCheckboxClick: PropTypes.func,
  onPlayTimer: PropTypes.func,
  onPauseTimer: PropTypes.func,
};
