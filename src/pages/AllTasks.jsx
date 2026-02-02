import React, { useEffect, useState } from "react";
import axios from "axios";

const AllTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(res => setTasks(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="tasks-container">
      {tasks.map(task => (
        <div className="task-card-item" key={task.id}>
          <div className="task-title">{task.title}</div>
          <div className={`task-status ${task.completed ? "completed" : "pending"}`}>
            {task.completed ? "Completed" : "Pending"}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllTasks;
