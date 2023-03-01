import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLoginInput(e) {
    e.preventDefault();
    // console.log({ email, password });
    loginUser();
    setEmail("");
    setPassword("");
  }
  const loginUser = () => {
    fetch("http://localhost:4000/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error_message) {
          alert(data.error_message);
        } else {
          alert("Login Successful");
          navigate("/dashboard");
          localStorage.setItem("_id", data.id);
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <main className="bg-blue-100 h-screen flex items-center flex-col justify-center">
      <h1 className="mb-4 text-2xl">Login to your account</h1>
      <form className="mx-auto w-full md:w-[450px]" onSubmit={handleLoginInput}>
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
          sign in
        </button>
        <p>
          Don't have an account?{" "}
          <Link to="/register" className="underline">
            Create one
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Login;
