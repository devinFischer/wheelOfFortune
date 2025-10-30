import React from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {}

const LoginPage = (props: Props) => {
  const navigate = useNavigate()
  return (
      <div className="h-screen w-screen flex items-center justify-center">
      <div className="w-52 grid gap-2">
        <p className='text-center text-xl'>Wheel of Fortune</p>
        <input type="text" placeholder="username" className="border p-2 rounded" />
        <input type="text" placeholder="password" className="border p-2 rounded" />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
        <button onClick={()=> navigate('/game')} className="bg-gray-500 text-white p-2 rounded">Play As Guest</button>
        <button onClick={()=> navigate('/create')} className="text-sm text-blue-500 underline">Create an Account</button>
      </div>
    </div>

  )
}

export default LoginPage