import React, { useState } from 'react';
import TaskList from './TaskList';
import Footer from './Footer';
import NewTaskForm from './NewTaskForm';

const App = () => {
    const [tasks, setTasks] = useState([]);

    const activeTasksCounter = tasks.filter(task => !task.completed).length;

    const toggleSwitch = (taskId) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };

    const addTask = (description) => {
        setTasks([...tasks, {
            id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 0,
            description,
            created: Date.now(),
            completed: false
        }]);
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    return (
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <NewTaskForm onAddTask={addTask} />
            </header>
            <section className="main">
                <TaskList tasks={tasks} onToggle={toggleSwitch} onDelete={deleteTask} />
            </section>
            <Footer activeTaskCounter={activeTasksCounter} />
        </section>
    );
};

export default App;
