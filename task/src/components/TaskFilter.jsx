import { useState } from "react";
import axios from "axios";

const TaskFilter = ({ userId, onResults }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
  
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found. User might be logged out.");
        return;
      }
  
      const queryParams = new URLSearchParams();
      if (title.trim()) queryParams.append("title", title);
      if (category) queryParams.append("name", category);
  
      const requestUrl = `http://localhost:8080/api/tasks/search?${queryParams.toString()}`;
      
      const response = await axios.get(requestUrl, {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      onResults(response.data); // 🔥 Updates tasks in Home.jsx
    } catch (error) {
      console.error("Error searching tasks:", error.message);
    }
  };
  
  return (
    <form onSubmit={handleSearch} className="flex gap-2 mb-4 p-4 bg-white shadow rounded">
      <input
        type="text"
        placeholder="Search by title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded flex-1"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Categories</option>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
        <option value="study">Study</option>
      </select>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Search</button>
    </form>
  );
};

export default TaskFilter;
