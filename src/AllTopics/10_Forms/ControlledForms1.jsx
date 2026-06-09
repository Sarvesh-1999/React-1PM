import { useState } from "react";

const ControlledForms1 = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      alert("All fields are required");
      return;
    }

    console.log("Form Submitted");
    let formData = { username, email, password };
    console.log(formData);


    // STORE DATA IN LOCAL STORAGE
    const savedUsers = JSON.parse(localStorage.getItem("users")) || []
    savedUsers.push(formData) // [{},{}]
    localStorage.setItem("users" , JSON.stringify(savedUsers))


    setUsername("")
    setEmail("")
    setPassword("")
  };

  return (
    <div>
      <h1>Learn Controlled Forms </h1>

      <form onSubmit={handleFormSubmit}>
        <label htmlFor="username">Username : </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsername}
        />
        <br />
        <label htmlFor="email">Email : </label>
        <input type="email" id="email" value={email} onChange={handleEmail} />
        <br />
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePassword}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ControlledForms1;
