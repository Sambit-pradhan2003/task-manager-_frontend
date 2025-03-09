import axios from "axios";

const TaskList = ({ userId, tasks, fetchTasks }) => {
  if (!tasks.length) return <p>No tasks available.</p>;

  // ✅ Toggle task completion
  const toggleTaskCompletion = async (taskId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(`http://localhost:8080/api/tasks/tasks/${taskId}/toggle`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchTasks(); // 🔥 Refresh tasks after update
    } catch (error) {
      console.error("Error toggling task:", error);
    }
  };

  // ✅ Delete task
  const deleteTask = async (taskId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:8080/api/tasks/${taskId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchTasks(); // 🔥 Refresh tasks after delete
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
  <h2 className="text-lg font-bold mb-2">Your Tasks</h2>
  <ul>
    {tasks.map((task) => (
      <li 
        key={task.id} 
        className="flex flex-col p-2 bg-white rounded mb-2 shadow"
      >
        <div className="flex justify-between items-center">
          <span className={`flex-1 font-semibold ${task.completed ? "line-through text-gray-500" : ""}`}>
            {task.title}
          </span>
          <button 
            className="bg-green-500 text-white px-2 py-1 rounded"
            onClick={() => toggleTaskCompletion(task.id)}
          >
            {task.completed ? "Undo" : "Complete"}
          </button>
          <button 
            className="bg-red-500 text-white px-2 py-1 rounded ml-2"
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </button>
        </div>
        <p className="text-sm text-gray-700 mt-1">{task.description}</p> {/* ✅ Added Description */}
      </li>
    ))}
  </ul>
</div>
  );
};

export default TaskList;
