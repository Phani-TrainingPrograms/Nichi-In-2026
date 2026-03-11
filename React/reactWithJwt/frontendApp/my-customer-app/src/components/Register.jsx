import { useState } from "react";
import API from "../api/api";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    debugger;
    try {
      const { data } = await API.post("/users/register/", form);
      localStorage.setItem("token", data.token);
      alert("Registered successfully!");
    } catch (err) {
      alert("Error registering: " + err.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Username" onChange={(e) => setForm({...form, name: e.target.value})}/>
      <input placeholder="Email" onChange={(e) => setForm({...form, email: e.target.value})}/>
      <input type="password" placeholder="Password" onChange={(e) => setForm({...form, password: e.target.value})}/>
      <button type="submit">Register</button>
    </form>
  );
}