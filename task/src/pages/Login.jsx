import React from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { loginUser } from "../api/api"; // ✅ Import loginUser function

function Login() {
  const navigate = useNavigate(); // ✅ Call useNavigate correctly

  const handleLogin = async (e, formData) => {
    e.preventDefault();
    try {
      const data = await loginUser(formData); // ✅ Call API function
      localStorage.setItem("token", data.token); // ✅ Store JWT
      alert("Login successful!");
      navigate("/"); // ✅ Redirect to home
    } catch (error) {
      alert("Invalid credentials.");
    }
  };

  return <AuthForm isRegister={false} onSubmit={handleLogin} />;
}

export default Login;
