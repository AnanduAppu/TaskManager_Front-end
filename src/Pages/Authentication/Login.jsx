import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

  const emailInput = useRef()
  const passInput = useRef()

    const navigate = useNavigate()
  return (


    <>

<form className="flex items-center justify-center mt-20 bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Login to Your Account
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Login
        </button>
        <p className="text-center text-sm text-gray-600">
          Don't have an account? <Link to={'/signup'} className="text-blue-500 hover:underline">Sign up</Link>
        </p>
      </div>
    </form>
    </>
  )
}

export default Login