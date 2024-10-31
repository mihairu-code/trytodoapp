import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import NewTaskForm from '../NewTaskForm/NewTaskForm.jsx';
import TaskList from '../TaskList/TaskList.jsx';
import Footer from '../Footer/Footer.jsx';

import './App.css';

let maxId = 0;
let timerId = [];

export default function App() {
  function createTodoTask(label, time, timerInSec) {
    const trimLabel = label.replace(/ +/g, ' ').trim();
    return {
      id: maxId++,
      label: trimLabel,
      completed: false,
      editing: false,
      time,
      timerInSec,
      timerStarted: false,
      disabled: false,
    };
  }

  const [todoData, setTodoData] = useState(() => {
    // Загрузка данных из localStorage при первой загрузке
    const savedData = localStorage.getItem('todoData');
    return savedData ? JSON.parse(savedData) : [];
  });

  const onEditTask = (id) => {
    setTodoData((prevTodoData) =>
      prevTodoData.map((task) => ({
        ...task,
        editing: task.id === id,
      }))
    );
  };

  const onSaveTask = (id, newLabel) => {
    setTodoData((prevTodoData) =>
      prevTodoData.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            label: newLabel,
            editing: false,
          };
        }
        return task;
      })
    );
  };

  const [filterData, setFilter] = useState('all');

  // Сохранение todoData в localStorage при изменении данных
  useEffect(() => {
    localStorage.setItem('todoData', JSON.stringify(todoData));
  }, [todoData]);

  // Слушатель события storage для синхронизации между вкладками
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'todoData') {
        const updatedData = JSON.parse(event.newValue);
        setTodoData(updatedData);
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const deleteTask = (id) => {
    onPauseTimer(id);
    setTodoData((prevTodoData) => prevTodoData.filter(item => item.id !== id));
  };

  const addTask = (text, timerInSec) => {
    const newTask = createTodoTask(text, new Date(), timerInSec);
    setTodoData((prevTodoData) => [...prevTodoData, newTask]);
  };

  const checkboxClick = (id) => {
    onPauseTimer(id);
    setTodoData((prevTodoData) => prevTodoData.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
          disabled: !item.completed,
        };
      }
      return item;
    }));
  };

  const setFilterData = (e) => {
    setFilter(e.target.innerText.toLowerCase());
  };

  const clearCompleted = () => {
    setTodoData((prevTodoData) => prevTodoData.filter(el => !el.completed));
  };

  function tick(id) {
    setTodoData((prevTodoData) => {
      const index = prevTodoData.findIndex((el) => el.id === id);
      return prevTodoData.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            timerStarted: true,
            timerInSec: item.timerInSec - 1,
          };
        }
        return item;
      });
    });
  }

  const onPlayTimer = (id) => {
    const index = todoData.findIndex((el) => el.id === id);
    const oldItem = todoData[index];

    if (oldItem.timerStarted) {
      clearInterval(timerId[index]);
    }

    const newTimerId = setInterval(() => tick(id), 1000);
    timerId[index] = newTimerId;

    setTodoData((prevTodoData) => {
      return prevTodoData.map((item, i) => {
        if (i === index) {
          return { ...oldItem, disabled: true };
        }
        return item;
      });
    });
  };

  const onPauseTimer = (id) => {
    const index = todoData.findIndex((el) => el.id === id);
    const oldItemTodoData = todoData[index];

    if (oldItemTodoData.timerStarted) {
      clearInterval(timerId[index]);

      setTodoData((prevTodoData) => {
        return prevTodoData.map((item, i) => {
          if (i === index) {
            return { ...item, timerStarted: false, disabled: false };
          }
          return item;
        });
      });
    }
  };

  const notCompletedTasks = todoData.filter((el) => !el.completed).length;

  return (
    <section className="todoapp">
      <header className="header">
        <h1>Todos</h1>
        <NewTaskForm onTaskAdded={addTask} />
      </header>
      <section className="main">
        <TaskList
          todos={todoData}
          filterData={filterData}
          onEditTask={onEditTask}
          onSaveTask={onSaveTask}
          onDeleted={deleteTask}
          onCheckboxClick={checkboxClick}
          onPlayTimer={onPlayTimer}
          onPauseTimer={onPauseTimer}
        />
        <Footer notCompletedTasks={notCompletedTasks} setFilterData={setFilterData} onClearCompleted={clearCompleted} />
      </section>
    </section>
  );
}

App.propTypes = {
  todoData: PropTypes.arrayOf(PropTypes.object),
  filterData: PropTypes.string,
};
