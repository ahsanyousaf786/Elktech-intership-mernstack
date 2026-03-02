import { useState } from "react";
import { MdCheck, MdDeleteForever, MdEdit } from "react-icons/md";

const TodoList = ({ curTask, handleDeleteTodo, handleCheckedTodo, handleEditTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState(curTask.content);

    const handleSave = () => {
        handleEditTodo(curTask.id, editedContent);
        setIsEditing(false);
    };

    return (
        <li className='todo-item'>
            {isEditing ? (
                <input
                    className='edit-input'
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                    onBlur={handleSave}        
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSave();  
                        if (e.key === 'Escape') setIsEditing(false); 
                    }}
                    autoFocus
                />
            ) : (
                <span className={curTask.checked ? "checkList" : "notCheckList"}>
                    {curTask.content}
                </span>
            )}

            <div className="btn-group">
                <button
                    className="edit-btn"
                    onClick={() => setIsEditing(true)}
                >
                    <MdEdit />
                </button>

                <button className='check-btn' onClick={() => handleCheckedTodo(curTask.content)}>
                    <MdCheck />
                </button>

                <button
                    className='delete-btn'
                    onClick={() => handleDeleteTodo(curTask.content)}
                >
                    <MdDeleteForever />
                </button>
            </div>
        </li>
    );
};

export default TodoList;