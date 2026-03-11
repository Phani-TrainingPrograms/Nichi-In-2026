import { useState } from "react";
import API from "../api/api";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    debugger;
    try {
      const { data } = await API.post("/users/login", form);
      localStorage.setItem("token", data.token);
      alert("Login successful!");
    } catch (err) {
      alert("Error logging in: " + err.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Email" onChange={(e) => setForm({...form, email: e.target.value})}/>
      <input type="password" placeholder="Password" onChange={(e) => setForm({...form, password: e.target.value})}/>
      <button type="submit">Login</button>
    </form>
  );
}