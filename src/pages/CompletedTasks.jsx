import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskCard from "../components/TaskCard";

const CompletedTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTasks(res.data.filter((task) => task.completed));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading completed tasks...</p>;

  return (
    <div className="tasks-container">
      <h2>Completed Tasks</h2>
      {tasks.length === 0 ? (
        <p>No completed tasks found.</p>
      ) : (
        tasks.map((task) => <TaskCard key={task.id} task={task} />)
      )}
    </div>
  );
};

export default CompletedTasks;
