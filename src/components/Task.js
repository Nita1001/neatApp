
const Task = ({ task }) => {
  return (
    <div className='task'>
      <h3>{task.date}  At  {task.time}</h3>
    </div>
  );
};

export default Task;