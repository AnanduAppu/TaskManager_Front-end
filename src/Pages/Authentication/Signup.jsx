import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import React, { useContext, useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import userContext from "../../contex/UserContex";


const Signup = () => {
  const nameRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();
  const maildRef = useRef();
const api = useContext(userContext)
  const [visibilityOf, setVisibilityOf] = useState(false);
console.log(api)
  // Mutation for signing up the user
  const mutation = useMutation({
    mutationFn: async (userData) => {
      const result = await axios.post(
        `${api}/signup`,
        userData
      );
      return result.data;
    },
    onSuccess: (data) => {
      if (data.success) {
        alert("Signup successful!");
      }
    },
    onError: (error) => {
      console.error("Signup error:", error);
      if (error.response && error.response.status === 409) {
        alert("User already exists. Please use a different email.");
      } else {
        alert("An error occurred during signup. Please try again.");
      }
    },
  });

  const functionSubmit = (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== confirmRef.current.value) {
      return alert("Password not matching");
    }

    const userData = {
      name: nameRef.current.value,
      email: maildRef.current.value,
      password: passwordRef.current.value,
    };

    // Call mutation to post the data
    mutation.mutate(userData);
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
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="your@mail"
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              ref={maildRef}
              required
            />
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
                  setVisibilityOf((prev) => !prev);
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
              type="text"
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
          onClick={functionSubmit}
        >
          Sign Up
        </button>
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Signup;
