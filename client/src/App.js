import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Replies from "./components/Replies";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/dashboard" element={<Home />}></Route>
          <Route path="/:id/replies" element={<Replies />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
