import React, { useEffect, useState } from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoDate from './TodoDate';
import { getLocalStorageTodoData, setLocalStorageTodoData } from './TodoLocalStorage';

const Todo = () => {
    const [task, setTask] = useState(() => getLocalStorageTodoData() || []);

    // Handle local storage
    useEffect(() => {
        setLocalStorageTodoData(task)
    }, [task]);

    // Add a new task
    const handleFormSubmit = (inputValue) => {
        const { id, content, checked } = inputValue;
        const trimmedInput = content.trim();
        if (!trimmedInput) return;

        const taskMatchedToInput = task.find(
            (curTask) => curTask.content.toLowerCase() === trimmedInput.toLowerCase()
        );
        if (taskMatchedToInput) return;

        setTask((prevTask) => [...prevTask, { id, content, checked }]);
    };

    // Delete a task
    const handleDeleteTodo = (content) => {
        const updatedTask = task.filter((curTask) => curTask.content !== content);
        setTask(updatedTask);
    };

    // Clear all tasks
    const handleClearAll = () => {
        setTask([]);
    };

    // Toggle check/uncheck
    const handleCheckedTodo = (content) => {
        const updatedTask = task.map((curTask) =>
            curTask.content === content ? { ...curTask, checked: !curTask.checked } : curTask
        );
        setTask(updatedTask);
    };

    // Edit a task
    const handleEditTodo = (id, newContent) => {
        const trimmedContent = newContent.trim();
        if (!trimmedContent) return;

        setTask((prevTask) =>
            prevTask.map((t) => (t.id === id ? { ...t, content: trimmedContent } : t))
        );
    };

    return (
        <section className='todo-container'>
            <header>
                <h1>My Todo List</h1>
                <TodoDate />
            </header>

            <TodoForm
                onAddTodo={handleFormSubmit}
                onClearAll={handleClearAll}
            />

            <section className='myUnOrdList'>
                <ul>
                    {task.map((curTask) => (
                        <TodoList
                            key={curTask.id}
                            curTask={curTask}  
                            handleDeleteTodo={handleDeleteTodo}
                            handleCheckedTodo={handleCheckedTodo}
                            handleEditTodo={handleEditTodo}
                        />
                    ))}
                </ul>
            </section>
        </section>
    );
};

export default Todo;