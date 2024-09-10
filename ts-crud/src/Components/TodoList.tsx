import { useState, useCallback } from "react";
import TodoItem from "./TodoItem";
import styles from '../styles/TodoList.module.css';

export type task = {
    id: number;
    text: string;
    completed: boolean;
}

const TodoList = (): JSX.Element => {
    const [tasks, setTasks] = useState<Map<number, task>>(new Map());
    const [text, setText] = useState<string>('');

    const addTask = useCallback((text: string) => {
        const newTask: task = {
            id: Date.now(),
            text: text,
            completed: false
        };
    
        setTasks(prevTasks => {
            const updatedTasks = new Map(prevTasks);
            updatedTasks.set(newTask.id, newTask);
            return updatedTasks;
        });
        setText('');
    }, []);
    
    const deleteTask = useCallback((id: number) => {
        setTasks(prevTasks => {
            const updatedTasks = new Map(prevTasks);
            updatedTasks.delete(id);
            return updatedTasks;
        });
    }, []);
    
    const toggleCompleted = useCallback((id: number) => {
        setTasks(prevTasks => {
            const updatedTasks = new Map(prevTasks);
            const task = updatedTasks.get(id);
    
            if (task) {
                updatedTasks.set(id, { ...task, completed: !task.completed });
            }
    
            return updatedTasks;
        });
    }, []);
    
    const updateTask = useCallback((id: number, newText: string) => {
        setTasks(prevTasks => {
            const updatedTasks = new Map(prevTasks);
            const task = updatedTasks.get(id);
    
            if (task) {
                updatedTasks.set(id, { ...task, text: newText });
            }
    
            return updatedTasks;
        });
    }, []);
    
    return (
        <div>
            {Array.from(tasks.values()).map(task => (
                <TodoItem 
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    toggleCompleted={toggleCompleted}
                    updateTask={updateTask}
                />
            ))}
            <div className={styles.container}>
                <input
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <button
                    onClick={() => addTask(text)}
                    disabled={text.trim() === ''}
                >Add</button>
            </div>
        </div>
    )
}

export default TodoList;
