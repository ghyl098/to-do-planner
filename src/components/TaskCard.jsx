import React from "react";

const TaskCard = ({ task }) => {
  return (
    <div className={`task-card ${task.completed ? "completed" : "pending"}`}>
      <h3>{task.title}</h3>
      <p>Status: {task.completed ? "Completed ✅" : "Pending ⏳"}</p>
    </div>
  );
};

export default TaskCard;
