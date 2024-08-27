import React, { useState } from 'react';
import TaskList from './TaskList';
import Footer from './Footer';
import NewTaskForm from './NewTaskForm';


const App = () => {
    const [tasks, setTasks] = useState([]);
    const [filtered, setFiltered] = useState('All');
    const [allSelected, setAllSelected] = useState(false);

    const activeTasksCounter = tasks.filter(task => !task.completed).length;

    const toggleSwitch = (taskId) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };

    const handleFilterChange = (newFilter) => {
        setFiltered(newFilter);
    };
    const filteredTasks = tasks.filter(task => {
         if (filtered === "Active") return !task.completed;
         if (filtered === "Completed") return task.completed;
         return true
    });


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

    const deleteAllCompleted = () => {
        setTasks(tasks.filter(task => !task.completed));
    };

    const selectAllToggle = () => {
        if (allSelected) {
            setTasks(tasks.map(task => ({ ...task, completed: false })));
        } else {
            setTasks(tasks.map(task => ({ ...task, completed: true })));
        }
        setAllSelected(!allSelected);
    };

    const handleTaskEdit = (taskId, newDescription) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, description: newDescription } : task
        ));
    };

    return (
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <NewTaskForm onAddTask={addTask}/>
            </header>
            <section className="main">
                <TaskList tasks={filteredTasks} onToggle={toggleSwitch} onDelete={deleteTask} onEdit={handleTaskEdit} />
            </section>
            <Footer activeTaskCounter={activeTasksCounter}
                    filter={filtered}
                    onFilterChange={handleFilterChange}
                    delCompleted={deleteAllCompleted}
                    allSelected={allSelected}
                    selectAllToggle={selectAllToggle}
            />
        </section>
    );
};

export default App;
