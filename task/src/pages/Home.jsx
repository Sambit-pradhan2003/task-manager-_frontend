import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TaskList from "../components/TaskList";
import TaskFilter from "../components/TaskFilter";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    setUserId(6); // Mock user ID
  }, [navigate]);

  // ✅ Fetch all tasks
  const fetchTasks = async () => {
    if (!userId) return;
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`http://localhost:8080/api/tasks/user/uid`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Fetch tasks when userId is set
  useEffect(() => {
    if (userId) fetchTasks();
  }, [userId]);

  // ✅ Handle search results (updates state)
  const handleSearchResults = (searchResults) => {
    setTasks(searchResults);
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-4">Task Manager</h1>
      <TaskFilter userId={userId} onResults={handleSearchResults} />
      
      {/* 🔥 Add Task Button - Redirects to /add-task */}
      <button 
        className="w-full bg-blue-500 text-white p-2 rounded mb-4"
        onClick={() => navigate("/add-task")}
      >
        + Add Task
      </button>

      {loading ? (
        <p>Loading tasks...</p>
      ) : (
        <TaskList userId={userId} tasks={tasks} fetchTasks={fetchTasks} />
      )}
    </div>
  );
};

export default Home;
