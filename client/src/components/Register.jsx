import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleRegisterInput(e) {
    e.preventDefault();
    // console.log({ username, password, email });
    signUp();
    setUsername("");
    setEmail("");
    setPassword("");
  }

  const signUp = () => {
    fetch("http://localhost:4000/api/register", {
      method: "POST",
      body: JSON.stringify({ email, username, password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.error_message) {
          alert(data.error_message);
        } else {
          alert("Account Created Successfully");
          navigate("/");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <main className="bg-blue-100 h-screen flex items-center flex-col justify-center">
      <h1 className="mb-4 text-2xl">Create an account</h1>
      <form
        className="mx-auto w-full md:w-[450px]"
        onSubmit={handleRegisterInput}
      >
        <input
          type="text"
          value={username}
          placeholder="Username"
          required
          onChange={(e) => setUsername(e.target.value)}
          className="w-full block p-4 rounded mb-4"
        />
        <input
          type="text"
          required
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full p-4 rounded mb-4"
        />
        <input
          type="password"
          required
          value={password}
          placeholder="Password"
          className="block w-full p-4 mb-4 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="block bg-blue-500 text-white capitalize w-full rounded py-3 mb-4"
        >
          Sign up
        </button>
        <p>
          Have an account?{" "}
          <Link to="/" className="underline">
            Sign In
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Register;
