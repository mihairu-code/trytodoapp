import React, { useState } from 'react';
import Task from './Task';
import NewTaskForm from './NewTaskForm';

const TaskList = () => {
    const [tasks, setTasks] = useState([
        { id: 0, description: 'Completed task', created: Date.now() - 17000, completed: true },
        { id: 1, description: 'Editing task', created: Date.now() - 300000, completed: false },
        { id: 2, description: 'Active task', created: Date.now() - 300000, completed: false },
    ]);

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
        <div>
            <NewTaskForm onAddTask={addTask} />
            <ul className="todo-list">
                {tasks.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        onToggle={() => toggleSwitch(task.id)}
                        onDelete={() => deleteTask(task.id)}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
