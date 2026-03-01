import React, {useState } from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoDate from './TodoDate';
import { getLocalStorageTodoData, setLocalStorageTodoData } from './TodoLocalStorage';

const Todo = () => {
    
    const [task, setTask] = useState(() => getLocalStorageTodoData());

    // hanlde local storage
   
    setLocalStorageTodoData(task);
  

    const handleFormSubmit = (inputValue) => {

        const { id, content, checked } = inputValue;

        const trimmedInput = content.trim();

        if (!trimmedInput) return;

        const taskMatchedToInput = task.find((curTask) => curTask.content === trimmedInput);

        if (taskMatchedToInput) return;

        setTask((prevTask) => [...prevTask, { id, content, checked }]);
    }

    const handleDeleteTodo = (value) => {

        const updatedTask = task.filter((curTask) => curTask.content !== value);
        setTask(updatedTask);
    }

    const handleClearAll = () => {
        setTask([]);
    }

    const handleCheckedTodo = (content) => {

        const updatedTask = task.map((curTask) => {
            if (curTask.content === content) {
                return { ...curTask, checked: !curTask.checked }
            } else {

                return curTask;
            }

        })

        setTask(updatedTask);
    }

    return (

        <section className='todo-container'>
            <header>
                <h1>My Todo List</h1>

                <TodoDate />

            </header>

            <TodoForm onAddTodo={handleFormSubmit} />

            <section className='myUnOrdList'>

                <ul>

                    {
                        task.map((curTask) => {
                            return (
                                <TodoList
                                    key={curTask.id}
                                    curTask={curTask.content}
                                    checked={curTask.checked}
                                    handleDeleteTodo={handleDeleteTodo}
                                    handleCheckedTodo={handleCheckedTodo}
                                />
                            );
                        })
                    }

                </ul>

            </section>

            <section>
                <button className='clear-btn ' onClick={() => handleClearAll()}>Clear All

                </button>
            </section>

        </section>
    )
}

export default Todo