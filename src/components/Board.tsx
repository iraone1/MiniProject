import React, { useState } from 'react';
import Task from './Task';

interface BoardProps {
    title: string;
    boardId: number;
}

const Board: React.FC<BoardProps> = ({ title, boardId }) => {
    const [tasks, setTasks] = useState<string[]>([]);

    const addTask = (taskName: string) => {
        setTasks([...tasks, taskName]);
    };

    return (
        <div className="board">
            <h3>{title}</h3>
            <button onClick={() => addTask(`New Task ${tasks.length + 1}`)}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <Task key={index} taskName={task} />
                ))}
            </ul>
        </div>
    );
};

export default Board;
