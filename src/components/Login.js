import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";
function Login() {
  const disptach = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          disptach(
            login({
              name: "Zaid Shaikh",
              age: "25",
              email: "random@gmail.com",
            })
          );
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          disptach(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Login;
