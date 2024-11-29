import PropTypes from 'prop-types';

import TasksFilter from '../TaskFilter/TaskFilter.jsx';
import ExtraComponent from '../ExtraComponent/ExtraComponent.jsx';
import './Footer.css';

export default function Footer({ notCompletedTasks, setFilterData, onClearCompleted }) {
  return (
      <footer className="footer">
        <span className="todo-count">{notCompletedTasks} items left</span>
        <TasksFilter setFilterData={setFilterData} />
        <button className="clear-completed" onClick={onClearCompleted}>
          Clear completed
        </button>
        <ExtraComponent />
      </footer>
  );
}

Footer.propTypes = {
  notCompletedTasks: PropTypes.number,
  onClearCompleted: PropTypes.func,
  setFilterData: PropTypes.func,
};
