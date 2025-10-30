import React from 'react'
import { useNavigate } from 'react-router-dom'


type Props = {}

const NotFoundPage = (props: Props) => {
   const navigate = useNavigate()
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="w-52 grid gap-2">
        <p className='text-center'>
          404: Not Found Page
        </p>
         <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          onClick={() => navigate('/login')} 
        >
          Go to Login
        </button>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
          onClick={() => navigate('/game')}
        >
          Go to Game
        </button>


      </div>
    </div>

  )
}

export default NotFoundPage