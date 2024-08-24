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

    const [isFocused, setIsFocused ] = useState(false);

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="new-todo"
                placeholder={isFocused ? '' : "What needs to be done?" }
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
        </form>
    );
};

export default NewTaskForm;
