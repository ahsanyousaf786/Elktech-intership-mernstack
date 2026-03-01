import { useState } from "react";

const TodoForm = ({ onAddTodo }) => {


    const [inputValue, setInputValue] = useState({});

    const handleInputChange = (value) => {
        setInputValue({id: value, content: value, checked: false});
    }



    const handleFormSubmit = (event) => {
        event.preventDefault();
        onAddTodo(inputValue);
        setInputValue({id: '', content: '', checked: false});
    }

    return (
        <section className='form'>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input
                        className='todo-input'
                        type="text"
                        placeholder='Add a new task'
                        value={inputValue.content}
                        onChange={(event) => {
                            handleInputChange(event.target.value)

                        }} />
                </div>

                <div>
                    <button
                        className='todo-btn'
                        type='submit'>Add</button>
                </div>

            </form>
        </section>
    )
}

export default TodoForm;