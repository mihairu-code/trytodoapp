import React, { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from "prop-types";

const Task = ({ task = {}, onToggle, onDelete, onEdit }) => {
    const { description, created, completed } = task;
    const [createdAt, setCreatedAt] = useState(formatDistanceToNow(new Date(created)));
    const [isEditing, setIsEditing] = useState(false);
    const [editedDescription, setEditedDescription] = useState(description);

    useEffect(() => {
        const interval = setInterval(() => {
            setCreatedAt(formatDistanceToNow(new Date(created)));
        }, 30000);

        return () => clearInterval(interval);
    }, [created]);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        onEdit(task.id, editedDescription);
        setIsEditing(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSave();
        } else if (e.key === 'Escape') {
            setIsEditing(false);
        }
    };

    return (
        <li className={completed ? 'completed' : isEditing ? 'editing' : ''}>
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
                <button className="icon icon-edit" onClick={handleEditClick}></button>
                <button className="icon icon-destroy" onClick={onDelete}></button>
            </div>
            {isEditing && (
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
};

Task.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        created: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired,
    onToggle: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
};

export default Task;
