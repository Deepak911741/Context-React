import React from 'react';
import AddTodo from './Components/AddTodo';
import Todos from './Components/Todos';

function ReduxMain() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold text-center mb-8">Learn About Redux Toolkit</h1>
            <div className="space-y-6">
                <AddTodo />
                <Todos />
            </div>
        </div>
    );
}

export default ReduxMain;
