import React from 'react'
import { useState } from 'react';

function AuthForm({ isRegister, onSubmit }) {

    const [formData, setFormData] = useState({ username: "", email: "", password: "" });

    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
      };


      return (
        <form onSubmit={(e) => onSubmit(e, formData)} className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
          <h2 className="text-xl font-bold mb-4">{isRegister ? "Register" : "Login"}</h2>
          {isRegister && (
            <input name="email" type="email" placeholder="Email" onChange={handleChange} className="w-full p-2 mb-2 border rounded" />
          )}
          <input name="username" placeholder="Username" onChange={handleChange} className="w-full p-2 mb-2 border rounded" />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} className="w-full p-2 mb-2 border rounded" />
          <button className="w-full bg-blue-500 text-white py-2 rounded">{isRegister ? "Sign Up" : "Login"}</button>
        </form>
      );
    };

export default AuthForm
