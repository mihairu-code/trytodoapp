import React, { useState } from 'react';

const NewTaskForm = ({ onAdd }) => {
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim()) {
            onAdd({ id: Date.now(), description, completed: false, editing: false, createdAt: '17 seconds ago' });
            setDescription('');
        }
    };

    return (
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className="new-todo"
                    placeholder="What needs to be done?"
                    autoFocus
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </form>
        </header>
    );
};

export default NewTaskForm;



