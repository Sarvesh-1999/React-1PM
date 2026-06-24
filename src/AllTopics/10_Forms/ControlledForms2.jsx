import { useState } from "react";

const ControlledForms2 = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      alert("All fields are required");
      return;
    }

    console.log("form Submitted");
    console.log(formData);

    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    savedUsers.push(formData);
    localStorage.setItem("users", JSON.stringify(savedUsers));

    setFormData({ username: "", email: "", password: "" });
  };

  return (
    <div>
      <h1>Learn ControlledForms 2</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={formData.username}
          onChange={handleChange}
          name="username"
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          name="email"
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          name="password"
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default ControlledForms2;
