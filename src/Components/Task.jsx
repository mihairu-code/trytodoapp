import React from 'react';

const Task = ({ task, onComplete, onEdit, onDelete }) => (
    <li className={task.completed ? 'completed' : task.editing ? 'editing' : ''}>
        <div className="view">
            <input
                className="toggle"
                type="checkbox"
                checked={task.completed}
                onChange={() => onComplete(task.id)}
            />
            <label>
                <span className="description">{task.description}</span>
                <span className="created">created {task.createdAt}</span>
            </label>
            <button className="icon icon-edit" onClick={() => onEdit(task.id)} />
            <button className="icon icon-destroy" onClick={() => onDelete(task.id)} />
        </div>
        {task.editing && (
            <input type="text" className="edit" value={task.description} />
        )}
    </li>
);

export default Task;

