
const Task = ({ task, isChecked }) => {
  return (
    <div className='task'>
      <h3 className={`task-text ${isChecked ? 'lineThrough' : ''}`} >{task.date}  At  {task.time}</h3>
    </div>
  );
};

export default Task;