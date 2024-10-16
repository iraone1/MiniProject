interface TaskProps {
    taskName: string;
}

const Task: React.FC<TaskProps> = ({ taskName }) => {
    return <li className="task">{taskName}</li>;
};

export default Task;
