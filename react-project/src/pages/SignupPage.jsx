import React, { useState } from "react";
import axios from "axios";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let resp = await axios.post("http://localhost:5000/users", formData);
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <article className="h-screen w-full bg-zinc-100 px-20">
      <h1 className="py-5 font-bold text-xl">Register Yourself</h1>

      <form
        className="flex flex-col max-w-2xl items-start gap-5"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Username"
          required
          className="bg-zinc-50 p-2 shadow rounded w-sm"
          value={formData.username}
          name="username"
          onChange={handleChange}
        />

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
          Signup
        </button>
      </form>
    </article>
  );
};

export default SignupPage;
