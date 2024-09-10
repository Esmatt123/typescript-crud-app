import React, { useState } from 'react';
import { task } from "./TodoList";
import styles from '../styles/TodoItem.module.css';

interface Props {
    task: task;
    deleteTask: (id: number) => void;
    toggleCompleted: (id: number) => void;
    updateTask: (id: number, newText: string) => void;
}

function TodoItem({ task, deleteTask, toggleCompleted, updateTask }: Props): JSX.Element {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editText, setEditText] = useState<string>(task.text);

    const handleUpdate = () => {
        updateTask(task.id, editText);
        setIsEditing(false);
    };

    return (
        <div className={`${styles.itemContainer} ${task.completed ? styles.completedTask : styles.incompleteTask}`}>
            <div className={styles.checkboxContainer}>
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleCompleted(task.id)}
                />
            </div>
            <div className={styles.textContainer}>
                {isEditing ? (
                    <div className={styles.editContainer}>
                        <input
                            type="text"
                            value={editText}
                            onChange={e => setEditText(e.target.value)}
                        />
                        <button className={styles.save} onClick={handleUpdate}>Save</button>
                        <button className={styles.cancel} onClick={() => setIsEditing(false)}>Cancel</button>
                    </div>
                ) : (
                    <p onDoubleClick={() => setIsEditing(true)}>{task.text}</p>
                )}
            </div>
            <div className={styles.buttonsContainer}>
                <button className={styles.delete} onClick={() => deleteTask(task.id)}>X</button>
            </div>
        </div>
    );
}

export default React.memo(TodoItem);
