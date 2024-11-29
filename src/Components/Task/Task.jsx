import { formatDistanceToNow } from 'date-fns';

import Timer from '../Timer/Timer.jsx';

import './Task.css';
import { useState } from 'react';
export default function Task(props) {
  const {
    label,
    completed,
    editing,
    time,
    timerInSec,
    disabled,
    onCheckboxClick,
    onDeleted,
    onPlayTimer,
    onPauseTimer,
    onEditTask,
    onSaveTask,
  } = props;

  const [editedDescription, setEditedDescription] = useState(label);

  const handleSave = () => {
    onSaveTask(editedDescription);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <li>
      <div className="view">
        <input className="toggle" type="checkbox" readOnly onClick={onCheckboxClick} checked={completed} />
        <label>
          <span className="title" onClick={onCheckboxClick}>
            {label}
          </span>
          <Timer timerInSec={timerInSec} disabled={disabled} onPlayTimer={onPlayTimer} onPauseTimer={onPauseTimer} />
          <span className="description">created {formatDistanceToNow(time)} ago</span>
        </label>
        <button className="icon icon-edit" onClick={() => onEditTask()}></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
      {editing && (
        <input
          className="edit"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      )}
    </li>
  );
}

