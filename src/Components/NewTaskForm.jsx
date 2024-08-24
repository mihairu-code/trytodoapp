import React, { useState } from 'react';

const NewTaskForm = () => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            console.log('Task added:', task); // Replace with actual task addition logic
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="new-todo"
                placeholder="What needs to be done?"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                autoFocus
            />
        </form>
    );
};

export default NewTaskForm;
