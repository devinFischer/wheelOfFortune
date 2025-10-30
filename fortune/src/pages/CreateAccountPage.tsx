import React from 'react'
import { useNavigate } from 'react-router-dom'

const CreateAccountPage = () => {
  const navigate = useNavigate()

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="w-64 grid gap-2">
        <p className="text-center text-xl">Create Account</p>
        <input type="text" placeholder="username" className="border p-2 rounded" />
        <input type="email" placeholder="email" className="border p-2 rounded" />
        <input type="password" placeholder="password" className="border p-2 rounded" />
        <button className="bg-green-500 text-white p-2 rounded">Sign Up</button>
        <button onClick={() => navigate('/login')} className="text-sm text-blue-500 underline">
          Back to Login
        </button>
      </div>
    </div>
  )
}

export default CreateAccountPage