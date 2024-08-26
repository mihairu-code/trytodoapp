import React from 'react';
import { formatDistanceToNowStrict } from 'date-fns';

const Task = ({ task, onToggle, onDelete }) => {
    const { description, created, completed } = task;
    const createdAt = formatDistanceToNowStrict(new Date(created));

    return (
        <li className={completed ? 'completed' : ''}>
            <div className="view">
                <input className="toggle"
                       type="checkbox"
                       checked={completed}
                       onChange={onToggle}
                />
                <label>
                    <span className="description">{description}</span>
                    <span className="created">created {createdAt} ago</span>
                </label>
                <button className="icon icon-destroy" onClick={onDelete}></button>
            </div>
        </li>
    );
};

export default Task;
