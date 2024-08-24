import React, { useState } from 'react';
import NewTaskForm from './NewTaskForm.jsx';
import TaskList from './TaskList.jsx';
import Footer from './Footer.jsx';

const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            description: 'Completed task',
            completed: true,
            editing: false,
            createdAt: 'created 17 seconds ago',
        },
        {
            id: 2,
            description: 'Editing task',
            completed: false,
            editing: true,
            createdAt: 'created 5 minutes ago',
        },
        {
            id: 3,
            description: 'Active task',
            completed: false,
            editing: false,
            createdAt: 'created 5 minutes ago',
        },
    ]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const completeTask = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task,
            ),
        );
    };

    const editTask = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, editing: !task.editing } : task,
            ),
        );
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const clearCompleted = () => {
        setTasks(tasks.filter((task) => !task.completed));
    };

    const tasksLeft = tasks.filter((task) => !task.completed).length;

    return (
        <section className="todoapp">
            <NewTaskForm onAdd={addTask} />
            <TaskList tasks={tasks} onComplete={completeTask} onEdit={editTask} onDelete={deleteTask} />
            <Footer tasksLeft={tasksLeft} clearCompleted={clearCompleted} />
        </section>
    );
};

export default App;