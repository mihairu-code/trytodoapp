import React from 'react';
import TaskList from './TaskList';
import Footer from './Footer';

const App = () => {
    return (
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
            </header>
            <section className="main">
                <TaskList />
                <Footer />
            </section>
        </section>
    );
};

export default App;
