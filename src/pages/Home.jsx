import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { user } = useAuth();
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (user) {
        const createdTimeStr = localStorage.getItem("accessToken_time");
        if (createdTimeStr) {
          const createdTime = new Date(createdTimeStr);
          const now = new Date();
          const diffMs = now - createdTime; // milliseconds elapsed
          const minutesLeft = 120 - diffMs / (1000 * 60); // 2 hours = 120 min
          setRemainingTime(minutesLeft > 0 ? Math.floor(minutesLeft) : 0);
        }
      }
    }, 1000); // update every second

    return () => clearInterval(interval);
  }, [user]);

  return (
    <div className="home-container">
      <h1>Welcome {user?.displayName || "Guest"}!</h1>
      <p className="home-description">
        This is your To-Do Planner app. Manage tasks easily and efficiently.
      </p>

      <div className="task-stats">
        <div className="stat-card completed">Completed Tasks</div>
        <div className="stat-card pending">Pending Tasks</div>
        <div className="stat-card">All Tasks</div>
      </div>

      {user && (
        <p
          style={{
            marginTop: "15px",
            fontWeight: "500",
            color: remainingTime > 10 ? "#27ae60" : "#e74c3c",
            fontSize: "1rem",
          }}
        >
          Access token expires in: {remainingTime} {remainingTime === 1 ? "minute" : "minutes"}
        </p>
      )}
    </div>
  );
};

export default Home;
