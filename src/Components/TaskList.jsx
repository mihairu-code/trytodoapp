import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onToggle, onDelete }) => {
    return (
        <ul className="todo-list">
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    onToggle={() => onToggle(task.id)}
                    onDelete={() => onDelete(task.id)}
                />
            ))}
        </ul>
    );
};

export default TaskList;
