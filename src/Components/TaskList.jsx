import React from 'react';
import Task from './Task.jsx';

const TaskList = ({ tasks, onComplete, onEdit, onDelete }) => (
    <ul className="todo-list">
        {tasks.map((task) => (
            <Task
                key={task.id}
                task={task}
                onComplete={onComplete}
                onEdit={onEdit}
                onDelete={onDelete}
            />
        ))}
    </ul>
);

export default TaskList;