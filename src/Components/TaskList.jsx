import React from 'react';
import Task from './Task';

const TaskList = () => {
    // Replace with actual tasks data
    const tasks = [
        { description: 'Completed task', created: Date.now() - 17000, completed: true },
        { description: 'Editing task', created: Date.now() - 300000, completed: false },
        { description: 'Active task', created: Date.now() - 300000, completed: false },
    ];

    return (
        <ul className="todo-list">
            {tasks.map((task, index) => (
                <Task key={index} task={task} />
            ))}
        </ul>
    );
};

export default TaskList;
