import React from 'react'
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/api";
import AuthForm from "../components/AuthForm";

function Register() {


    const navigate = useNavigate();

    const handleRegister = async (e, formData) => {
      e.preventDefault();
      try {
        await registerUser(formData);
        alert("Registration successful! Please log in.");
        navigate("/login");
      } catch (error) {
        alert("Error registering user.");
      }
    };


    return <AuthForm isRegister={true} onSubmit={handleRegister} />;
}

export default Register

