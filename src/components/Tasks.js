
import Task from './Task'
import Input from './Input'
import Button from './Button'
import { useTaskGlobalContext } from '../contexts/TasksContext';


const Tasks = () => {
    const { tasks, deleteTask, showScheduled } = useTaskGlobalContext();

    return (
        <header className='task-header'>
            <div className='tasks-container'>
                {showScheduled && tasks.map((task) => {
                    return (
                        <div key={task.id} className='taskField'>
                            <Input
                                key={`checkbox-${task.id}`}
                                id='checkbox'
                                type='checkbox'
                            />
                            <Task key={`task-${task.id}`} task={task} />
                            <Button
                                key={`trash-${task.id}`}
                                className='trash'
                                title='Delete'
                                handleClick={() => deleteTask(task)}
                            />
                        </div>
                    );
                })}
            </div>
        </header>
    );
};

export default Tasks;