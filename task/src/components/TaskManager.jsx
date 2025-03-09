import { useEffect, useState } from "react";
import axios from "axios";
import TaskList from "./TaskList";
import TaskFilter from "./TaskFilter";

const TaskManager = ({ userId }) => {
  const [tasks, setTasks] = useState([]); // 🔥 State for storing tasks
  const [loading, setLoading] = useState(true);

  // ✅ Fetch all tasks (when component mounts or a task is added)
  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`http://localhost:8080/api/tasks/user/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Handle search results (updates state)
  const handleSearchResults = (searchResults) => {
    setTasks(searchResults);
  };

  // Fetch all tasks when component mounts
  useEffect(() => {
    if (userId) fetchTasks();
  }, [userId]);

  return (
    <div className="p-4">
      <TaskFilter userId={userId} onResults={handleSearchResults} /> {/* 🔥 Pass function to filter */}
      <TaskList userId={userId} tasks={tasks} fetchTasks={fetchTasks} loading={loading} />
    </div>
  );
};

export default TaskManager;
