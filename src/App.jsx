import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllTasks from "./pages/AllTasks";
import CompletedTasks from "./pages/CompletedTasks";
import PendingTasks from "./pages/PendingTasks";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<AllTasks />} />
          <Route path="/completed" element={<CompletedTasks />} />
          <Route path="/pending" element={<PendingTasks />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
