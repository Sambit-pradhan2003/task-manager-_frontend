import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/users";
export const registerUser = async (userData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/register`, userData);
      return response.data;
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  };


  export const loginUser = async (credentials) => {
    try {
        console.log(credentials)
      const response = await axios.post(`${API_BASE_URL}/login`, credentials);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };




  const TASKS_API_URL = "http://localhost:8080/api/tasks";

export const fetchTasks = async (userId) => {
  try {
    const response = await axios.get(`${TASKS_API_URL}/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

export const addTask = async (taskData) => {
  try {
    const token = localStorage.getItem("token"); // Get token from storage
    if (!token) throw new Error("Unauthorized - No token found");

    console.log("Sending task data:", taskData);

    const response = await axios.post(`${TASKS_API_URL}/user`, taskData, {
      headers: {
        Authorization: `Bearer ${token}`, // ✅ Include Bearer token
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error adding task:", error.response?.data || error.message);
    throw error;
  }
};

export const updateTask = async (taskId, updatedTask) => {
  try {
    const response = await axios.put(`${TASKS_API_URL}/${taskId}`, updatedTask);
    return response.data;
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};

export const deleteTask = async (taskId) => {
  try {
    await axios.delete(`${TASKS_API_URL}/${taskId}`);
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};


export const searchTasks = async (userId, title = "", category = "") => {
    try {
      const response = await axios.get(`http://localhost:8080/api/tasks/search`, {
        params: { userId, title, category }
      });
      return response.data;
    } catch (error) {
      console.error("Error searching tasks:", error);
      throw error;
    }
  };
  

