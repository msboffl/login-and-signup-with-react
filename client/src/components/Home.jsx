import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";

const Home = () => {
  const [thread, setThread] = useState("");
  const navigate = useNavigate();

  const threadHandler = (e) => {
    e.preventDefault();
    console.log({ thread });
    setThread("");
  };
  useEffect(() => {
    const checkUser = () => {
      if (!localStorage.getItem("_id")) {
        navigate("/");
      } else {
        console.log("Authenticated");
      }
    };
    checkUser();
  }, [navigate]);

  return (
    <>
      <Nav />
      <main className="bg-blue-50 h-screen flex justify-center items-center flex-col">
        <h2 className="text-2xl font-bold">Create a thread</h2>
        <form action="" onSubmit={threadHandler}>
          <input
            className="h-12 m-5 px-4 border-2 rounded-sm border-blue-600"
            type="text"
            value={thread}
            placeholder="Title/Description"
            onChange={(e) => setThread(e.target.value)}
          />
          <button className="bg-blue-600 text-white rounded px-6 py-2">
            Add Thread
          </button>
        </form>
      </main>
    </>
  );
};

export default Home;
