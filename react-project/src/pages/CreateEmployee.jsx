import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateEmployee = () => {
  const [employee, setEmployee] = useState({
    firstname: "",
    lastname: "",
    email: "",
    age: "",
    designation: "",
    doj: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let resp = await axios.post("http://localhost:5000/employees", employee);
      console.log(resp);
      alert("Employee Created ✅");
      navigate("/all");
    } catch (error) {
      alert("Unable to create ❌");
      console.log(error);
    }
  };

  return (
    <article className="h-screen w-full bg-zinc-100 px-20">
      <h1 className="py-5 font-bold text-xl">Create Employee</h1>

      <form
        className="flex flex-col max-w-2xl items-start gap-5"
        onSubmit={handleSubmit}
      >
        <div>
          <input
            required
            className="shadow border border-zinc-300 bg-white px-3 py-1 me-3 rounded"
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Firstname"
            value={employee.firstname}
            onChange={handleChange}
          />
          <input
            required
            className="shadow border border-zinc-300 bg-white px-3 py-1 me-3 rounded"
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Lastname"
            value={employee.lastname}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            required
            className="shadow border border-zinc-300 bg-white px-3 py-1 me-3 rounded"
            type="email"
            name="email"
            id="email"
            placeholder="john@example.com"
            value={employee.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            required
            className="shadow border border-zinc-300 bg-white px-3 py-1 me-3 rounded"
            type="text"
            name="designation"
            id="designation"
            placeholder="SDE"
            value={employee.designation}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            required
            className="shadow border border-zinc-300 bg-white px-3 py-1 me-3 rounded"
            type="number"
            name="age"
            id="age"
            placeholder="22"
            value={employee.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            required
            className="shadow border border-zinc-300 bg-white px-3 py-1 me-3 rounded"
            type="date"
            name="doj"
            id="doj"
            value={employee.doj}
            onChange={handleChange}
          />
        </div>
        <div>
          <button className=" bg-zinc-900 text-zinc-50 px-5 py-2 rounded cursor-pointer">
            Create
          </button>
        </div>
      </form>
    </article>
  );
};

export default CreateEmployee;
