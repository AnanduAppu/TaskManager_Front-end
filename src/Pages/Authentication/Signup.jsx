import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import React, { useRef } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const nameRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();
  const maildRef = useRef();

  const [visibilityOf, SetVisibilityOf] = useState(false);

  const functionSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== confirmRef.current.value) {
      return alert("Password not matching");
    }
    const name = nameRef.current.value;
    const email = maildRef.current.value;
    const password = passwordRef.current.value;
    const userData = {
      name,
      password,
      email,
    };
    try {
      const result = await axios.post(
        "http://localhost:3005/user/signup",
        userData
      );

      if (result.data.sccess) {
        alert("login success");
      }
    } catch (error) {}

    try {
    } catch (error) {}
  };
  return (
    <form className="flex items-center justify-center mt-20 bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Create an Account
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              ref={nameRef}
              required
            />
            <p className="my-2"></p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="mail"
              placeholder="your@mail"
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              ref={maildRef}
              required
            />
            <p className="my-2"></p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="flex">
              <input
                type={visibilityOf ? "text" : "password"}
                placeholder="Password"
                className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                ref={passwordRef}
                required
              />
              <button
                className="p-2"
                onClick={(e) => {
                  e.preventDefault();
                  SetVisibilityOf((prev) => !prev);
                }}
              >
                {visibilityOf ? <Visibility /> : <VisibilityOff />}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              ref={confirmRef}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={(e) => functionSubmit(e)}
        >
          Sign Up
        </button>
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to={"/"} className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Signup;
