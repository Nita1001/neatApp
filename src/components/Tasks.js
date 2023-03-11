
// import { useEffect, useState } from 'react'
import Task from './Task'
import Input from './Input'
import Button from './Button'
import { useTaskGlobalContext } from '../contexts/TasksContext';

const Tasks = () => {
    const { tasks, deleteTask, showScheduled, handleChecked } = useTaskGlobalContext();

    return (
        <header className='task-header'>
            <div className='tasks-container'>
                {showScheduled && tasks.map((task) => {
                    return (
                        <div key={task.id} className='taskField'>
                            <Input
                                id='checkbox'
                                name={`checkbox[${task.id}]`}
                                type='checkbox'
                                checked={task.status === 'completed'}
                                handleNewInput={() => handleChecked(task.id)}
                            />
                            <Task isChecked={task.status === 'completed'} task={task} />
                            <Button
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