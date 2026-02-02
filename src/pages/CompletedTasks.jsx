import React, { useEffect, useState } from "react";
import axios from "axios";

const CompletedTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setTasks(res.data.filter((t) => t.completed)))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading tasks...</p>;

  return (
    <div>
      <h2>Completed Tasks</h2>
      <div className="tasks-container">
        {tasks.map((task) => (
          <div key={task.id} className="task-card-item">
            <div className="task-title">{task.title}</div>
            <div className="task-status completed">Completed</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompletedTasks;
