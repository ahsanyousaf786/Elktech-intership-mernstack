import { MdCheck, MdDeleteForever } from "react-icons/md";

const TodoList = ({ curTask, checked, handleDeleteTodo,handleCheckedTodo}) => {

    return (

        <li className='todo-item'>
            <span className={checked ? "checkList" : "notCheckList"}>{curTask}</span>

            <div className="btn-group">
                <button className='check-btn' onClick={() => handleCheckedTodo(curTask)}>
                    <MdCheck />
                </button>

                <button
                    className='delete-btn'
                    onClick={() => handleDeleteTodo(curTask)}>

                    <MdDeleteForever />
                </button>
            </div>
        </li>
    )
}


export default TodoList;