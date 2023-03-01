import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const signOutHandler = () => {
    alert("Are you sure to sign out.?");
    localStorage.removeItem("_id");
    navigate("/");
  };
  return (
    <nav className="bg-blue-200 h-16 flex justify-between items-center px-20">
      <h2 className="text-2xl font-bold">Threadify</h2>
      <div>
        <button
          className="bg-blue-600 text-white rounded px-6 py-2"
          onClick={signOutHandler}
        >
          Sign Out
        </button>
      </div>
    </nav>
  );
};

export default Nav;
