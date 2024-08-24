import React, { useState } from 'react';
import Task from './Task';


const TaskList = () => {

    const [tasks, setTasks] = useState ([
        {id: 0, description: 'Completed task', created: Date.now() - 17000, completed: true },
        {id: 1, description: 'Editing task', created: Date.now() - 300000, completed: false },
        {id: 2, description: 'Active task', created: Date.now() - 300000, completed: false },
    ]);

    const toggleSwitch = (taskId) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };

    return (
        <ul className="todo-list">
            {tasks.map((task) => (
                <Task key={task.id} task={task} onToggle={() => toggleSwitch(task.id) } />
            ))}
        </ul>
    );
};

export default TaskList;
