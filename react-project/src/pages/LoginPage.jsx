import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    async function getRegisteredUsers() {
      try {
        let resp = await axios.get("http://localhost:5000/users");
        console.log(resp.data); // [{}, {}]
        setRegisteredUsers(resp.data);
      } catch (error) {
        console.log(error);
      }
    }

    getRegisteredUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allUsers = [...registeredUsers];

    const authUser = allUsers.find((ele) => {
      return ele.email === formData.email && ele.password === formData.password;
    });

    if (authUser) {
      const token = Math.random();
      localStorage.setItem("token", token);
      navigate("/");
    } else {
      alert("Invalid credentials❌");
    }
  };

  return (
    <article className="h-screen w-full bg-zinc-100 px-20">
      <h1 className="py-5 font-bold text-xl">Login</h1>

      <form
        className="flex flex-col max-w-2xl items-start gap-5"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Email"
          required
          className="bg-zinc-50 p-2 shadow rounded w-sm"
          value={formData.email}
          name="email"
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Password"
          required
          className="bg-zinc-50 p-2 shadow rounded w-sm"
          value={formData.password}
          name="password"
          onChange={handleChange}
        />

        <button className="bg-zinc-900 text-zinc-100 px-10 py-2 rounded shadow cursor-pointer">
          Login
        </button>
      </form>
    </article>
  );
};

export default LoginPage;
